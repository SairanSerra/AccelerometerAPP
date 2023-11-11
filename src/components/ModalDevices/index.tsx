import React from 'react'
import * as Styled from './styles'
import {ModalDevicesProps} from './types'
import LottieView from 'lottie-react-native'
import BlueIcon from '../../assets/BluetoothIcon.json'

export const ModalDevices = ({
  closeModal,
  visible,
  devices = [],
  connectToPeripheral,
}: ModalDevicesProps) => {
  return (
    <Styled.ContainerMaster animationType="slide" transparent visible={visible}>
      <Styled.ContainerModal>
        <Styled.Title>Conectar ao dispositivo</Styled.Title>
        <Styled.ContainerMasterItems>
          {devices.length === 0 && (
            <Styled.ContainerIcon>
              <LottieView
                source={BlueIcon}
                autoPlay
                loop
                style={{height: 300, width: 300}}
                speed={0.5}
              />
            </Styled.ContainerIcon>
          )}

          {devices.length > 0 &&
            devices.map((element, index) => {
              const notExistName = !element.name
              if (notExistName) {
                return null
              }
              return (
                <Styled.ContainerItems
                  key={index}
                  onPress={() => connectToPeripheral(element)}>
                  <Styled.TextItem>{element.name}</Styled.TextItem>
                </Styled.ContainerItems>
              )
            })}
        </Styled.ContainerMasterItems>
        <Styled.ContainerButton onPress={closeModal}>
          <Styled.TextButton>Cancelar</Styled.TextButton>
        </Styled.ContainerButton>
      </Styled.ContainerModal>
    </Styled.ContainerMaster>
  )
}
