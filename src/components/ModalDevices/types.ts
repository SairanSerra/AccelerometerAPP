import {Device} from 'react-native-ble-plx'

export type ModalDevicesProps = {
  visible: boolean
  devices: Device[]
  closeModal: () => void
  connectToPeripheral: (device: Device) => void
}
