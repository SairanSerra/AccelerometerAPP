/* eslint-disable n/no-callback-literal */
/* eslint-disable no-bitwise */
import {useState} from 'react'
import {PermissionsAndroid, Platform} from 'react-native'
import {
  BleError,
  BleManager,
  Characteristic,
  Device,
} from 'react-native-ble-plx'
import {PERMISSIONS, requestMultiple} from 'react-native-permissions'
import DeviceInfo from 'react-native-device-info'
import {atob} from 'react-native-quick-base64'

const bleManager = new BleManager()

type VoidCallback = (result: boolean) => void

export const useBlueManager = () => {
  const [allDevices, setAllDevices] = useState<Device[]>([])
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null)
  const [isModalDevicesVisible, setIsModalDevicesVisible] =
    useState<boolean>(false)
  const [isModalReadDataVisible, setIsModalReadDataVisible] =
    useState<boolean>(false)
  const [dataReadAxiosX, setDataReadAxiosX] = useState<number[]>([])
  const [dataReadAxiosY, setDataReadAxiosY] = useState<number[]>([])
  const [dataReadAxiosZ, setDataReadAxiosZ] = useState<number[]>([])

  const scanForDevices = () => {
    requestPermissions((isGranted) => {
      if (isGranted) {
        scanForPeripherals()
      }
    })
  }

  const hideModal = () => {
    setIsModalDevicesVisible(false)
  }

  const openModal = async () => {
    scanForDevices()
    setIsModalDevicesVisible(true)
  }

  const requestPermissions = async (cb: VoidCallback) => {
    if (Platform.OS === 'android') {
      const apiLevel = await DeviceInfo.getApiLevel()

      if (apiLevel < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Bluetooth Low Energy requires Location',
            buttonNeutral: 'Ask Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        )
        cb(granted === PermissionsAndroid.RESULTS.GRANTED)
      } else {
        const result = await requestMultiple([
          PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
          PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ])

        const isGranted =
          result['android.permission.BLUETOOTH_CONNECT'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result['android.permission.BLUETOOTH_SCAN'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result['android.permission.ACCESS_FINE_LOCATION'] ===
            PermissionsAndroid.RESULTS.GRANTED

        cb(isGranted)
      }
    } else {
      cb(true)
    }
  }

  const isDuplicteDevice = (devices: Device[], nextDevice: Device) =>
    devices.findIndex((device) => nextDevice.id === device.id) > -1

  const scanForPeripherals = () =>
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error)
      }
      if (device) {
        setAllDevices((prevState: Device[]) => {
          if (!isDuplicteDevice(prevState, device)) {
            return [...prevState, device]
          }
          return prevState
        })
      }
    })

  const connectToDevice = async (device: Device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id)
      setConnectedDevice(deviceConnection)
      await deviceConnection.discoverAllServicesAndCharacteristics()

      bleManager.stopDeviceScan()
      setIsModalDevicesVisible(false)
      setIsModalReadDataVisible(true)
      startStreamingData(deviceConnection)
    } catch (e) {
      console.log('FAILED TO CONNECT', e)
    }
  }

  const disconnectFromDevice = () => {
    if (connectedDevice) {
      bleManager.cancelDeviceConnection(connectedDevice.id)
      setConnectedDevice(null)
      setIsModalReadDataVisible(false)
      setDataReadAxiosX([])
      setDataReadAxiosY([])
      setDataReadAxiosZ([])
    }
  }

  const onAccelerometerUpdate = (
    error: BleError | null,
    characteristic: Characteristic | null,
  ) => {
    if (error) {
      console.log(error)
      return -1
    }
    if (!characteristic?.value) {
      console.log('No Data was recieved')
      return -1
    }
    const rawData = atob(characteristic.value)
    const separateData = rawData.split(' ')
    const axiosX = Number(separateData[0])
    const axiosY = Number(separateData[1])
    const axiosZ = Number(separateData[2])

    setDataReadAxiosX((state) => [...state, axiosX])
    setDataReadAxiosY((state) => [...state, axiosY])
    setDataReadAxiosZ((state) => [...state, axiosZ])
  }

  const startStreamingData = async (device: Device) => {
    const serviceUUID = '0000ffe0-0000-1000-8000-00805f9b34fb'
    const characteristicUUID = '0000ffe1-0000-1000-8000-00805f9b34fb'

    if (device) {
      return device.monitorCharacteristicForService(
        serviceUUID,
        characteristicUUID,
        (error, characteristic) => onAccelerometerUpdate(error, characteristic),
      )
    }
    console.log('No Device Connected')
  }

  return {
    scanForPeripherals,
    requestPermissions,
    connectToDevice,
    allDevices,
    connectedDevice,
    disconnectFromDevice,
    hideModal,
    openModal,
    isModalDevicesVisible,
    isModalReadDataVisible,
    dataReadAxiosX,
    dataReadAxiosY,
    dataReadAxiosZ,
  }
}
