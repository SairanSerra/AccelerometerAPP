import React from 'react'
import * as Styled from './styles'
import {useBlueManager} from './hooks'
import {ModalDevices} from '../../components'
import {ModalChartReadAccelerometer} from '../../components/ModalChartReadAccelerometer'
import LottieView from 'lottie-react-native'
import UserAnalitics from '../../assets/UserAnalitics.json'
import Toast, {ToastConfigParams} from 'react-native-toast-message'
import CustomToast from '../../../src/components/Toast'

export const BluetoothConnection = () => {
  const {
    allDevices,
    disconnectFromDevice,
    openModal,
    isModalDevicesVisible,
    connectToDevice,
    isModalReadDataVisible,
    dataReadAxiosX,
    dataReadAxiosY,
    dataReadAxiosZ,
    hideModal,
  } = useBlueManager()

  return (
    <Styled.ContainerMaster>
      <Styled.ScrollView>
        <Styled.Title>Sensor de vibração</Styled.Title>
        <Styled.ContainerUserAnalitics>
          <LottieView
            source={UserAnalitics}
            autoPlay
            loop
            style={{height: 300, width: 300}}
            speed={0.5}
          />
        </Styled.ContainerUserAnalitics>

        <Styled.ContainerButton>
          <Styled.Button>
            <Styled.TextButton onPress={openModal}>
              {'Conectar'}
            </Styled.TextButton>
          </Styled.Button>
        </Styled.ContainerButton>
      </Styled.ScrollView>
      <ModalDevices
        connectToPeripheral={connectToDevice}
        devices={allDevices}
        visible={isModalDevicesVisible}
        closeModal={hideModal}
      />
      <ModalChartReadAccelerometer
        closeConnection={disconnectFromDevice}
        dataAxioX={dataReadAxiosX}
        dataAxioY={dataReadAxiosY}
        dataAxioZ={dataReadAxiosZ}
        isVisible={isModalReadDataVisible}
      />
    </Styled.ContainerMaster>
  )
}
