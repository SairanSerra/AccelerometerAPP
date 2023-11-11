import React from 'react'
import * as Styled from './styles'
import {useBlueManager} from './hooks'
import {ModalDevices} from '../../components'
import {ModalChartReadAccelerometer} from '../../components/ModalChartReadAccelerometer'

export const BluetoothConnection = () => {
  const {
    allDevices,
    disconnectFromDevice,
    openModal,
    isModalDevicesVisible,
    connectToDevice,
    isModalReadDataVisible,
    dataRead,
    hideModal,
  } = useBlueManager()

  return (
    <Styled.ContainerMaster>
      <Styled.ScrollView>
        <Styled.Title>Nome do Grupo</Styled.Title>
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
        data={dataRead}
        isVisible={isModalReadDataVisible}
      />
    </Styled.ContainerMaster>
  )
}
