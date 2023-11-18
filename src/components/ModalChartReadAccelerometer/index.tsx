import React from 'react'
import * as Styled from './styles'
import {ModalChartReadAccelerometerProps} from './types'
import {ChartLine} from '../LineChart'

export const ModalChartReadAccelerometer = ({
  dataAxioX,
  dataAxioY,
  dataAxioZ,
  isVisible,
  closeConnection,
}: ModalChartReadAccelerometerProps) => {
  return (
    <Styled.ContainerMaster animationType="slide" visible={isVisible}>
      <Styled.SubContainer>
        <Styled.Title>Leitura</Styled.Title>

        <Styled.ContainerGraphic>
          <Styled.TitleGraphic>Eixo X</Styled.TitleGraphic>
          <ChartLine data={dataAxioX} />
          <Styled.ContainerTextDescription>
            <Styled.TextDescription>Valor atual:</Styled.TextDescription>
            <Styled.TextValueDescription>
              {dataAxioX.length === 0
                ? '0'
                : String(dataAxioX[dataAxioX.length - 1])}
            </Styled.TextValueDescription>
          </Styled.ContainerTextDescription>
        </Styled.ContainerGraphic>

        <Styled.ContainerGraphic>
          <Styled.TitleGraphic>Eixo Y</Styled.TitleGraphic>
          <ChartLine data={dataAxioY} />
          <Styled.ContainerTextDescription>
            <Styled.TextDescription>Valor atual:</Styled.TextDescription>
            <Styled.TextValueDescription>
              {dataAxioY.length === 0
                ? '0'
                : String(dataAxioY[dataAxioY.length - 1])}
            </Styled.TextValueDescription>
          </Styled.ContainerTextDescription>
        </Styled.ContainerGraphic>

        <Styled.ContainerGraphic>
          <Styled.TitleGraphic>Eixo Z</Styled.TitleGraphic>
          <ChartLine data={dataAxioZ} />
          <Styled.ContainerTextDescription>
            <Styled.TextDescription>Valor atual:</Styled.TextDescription>
            <Styled.TextValueDescription>
              {dataAxioZ.length === 0
                ? '0'
                : String(dataAxioZ[dataAxioZ.length - 1])}
            </Styled.TextValueDescription>
          </Styled.ContainerTextDescription>
        </Styled.ContainerGraphic>

        <Styled.ContainerButton onPress={closeConnection}>
          <Styled.TextButton>Cancelar leitura</Styled.TextButton>
        </Styled.ContainerButton>
      </Styled.SubContainer>
    </Styled.ContainerMaster>
  )
}
