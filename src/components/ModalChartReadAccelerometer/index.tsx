import React from 'react'
import * as Styled from './styles'
import {ModalChartReadAccelerometerProps} from './types'
import {ChartLine} from '../LineChart'

export const ModalChartReadAccelerometer = ({
  data,
  isVisible,
  closeConnection,
}: ModalChartReadAccelerometerProps) => {
  return (
    <Styled.ContainerMaster animationType="slide" visible={isVisible}>
      <Styled.SubContainer>
        <Styled.Title>Leitura</Styled.Title>
        <ChartLine data={data} />
        <Styled.ContainerTextDescription>
          <Styled.TextDescription>Valor atual:</Styled.TextDescription>
          <Styled.TextValueDescription>
            {data.length === 0 ? '0' : String(data[data.length - 1])}
          </Styled.TextValueDescription>
        </Styled.ContainerTextDescription>

        <Styled.ContainerButton onPress={closeConnection}>
          <Styled.TextButton>Cancelar leitura</Styled.TextButton>
        </Styled.ContainerButton>
      </Styled.SubContainer>
    </Styled.ContainerMaster>
  )
}
