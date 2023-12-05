import React from 'react'
import * as Styled from './styles'
import {ModalChartReadAccelerometerProps} from './types'
import {ChartLine} from '../LineChart'
import {useModalReadAccelerometer} from './hooks/useModalReadAccelerometer'

export const ModalChartReadAccelerometer = (
  data: ModalChartReadAccelerometerProps,
) => {
  const {
    AxioXHasProblem,
    AxioYHasProblem,
    AxioZHasProblem,
    notificationEnable,
    setNotificationEnable,
    closeConnection,
    isVisible,
    ShowToastError,
    dataAxioXCurrent,
    dataAxioYCurrent,
    dataAxioZCurrent,
    dataAxioX,
    dataAxioY,
    dataAxioZ,
    dataXReports,
    isRenderReport,
    dataYReports,
    dataZReports,
    handleClearReports,
    handleGenerateSetReport,
    setIsRenderReport,
    reportsEnable,
  } = useModalReadAccelerometer(data)

  return (
    <Styled.ContainerMaster $isVisible={isVisible}>
      <Styled.ViewRelative>
        <Styled.SubContainer>
          <Styled.Title>
            {isRenderReport ? 'Relatório' : 'Leitura'}
          </Styled.Title>
          <Styled.ContainerButtonActions>
            <Styled.Button
              onPress={() => {
                setNotificationEnable((state) => !state)
                ShowToastError(
                  `O eixo X excedeu o valor nominal medindo: ${dataAxioXCurrent}`,
                )
              }}>
              <Styled.TextButtonAction>
                {notificationEnable ? 'Desabilitar ' : 'Habilitar '}{' '}
                notificações
              </Styled.TextButtonAction>
            </Styled.Button>
            <Styled.Button
              disabled={!reportsEnable}
              onPress={() => {
                setIsRenderReport((state) => {
                  if (!state) {
                    handleGenerateSetReport()
                    return !state
                  }
                  handleClearReports()
                  return !state
                })
              }}>
              <Styled.TextButtonAction>
                {isRenderReport ? 'Leitura' : 'Relatório'}
              </Styled.TextButtonAction>
            </Styled.Button>
          </Styled.ContainerButtonActions>

          <Styled.ContainerGraphic
            $hasProblem={isRenderReport ? false : AxioXHasProblem}>
            <Styled.TitleGraphic>Eixo X</Styled.TitleGraphic>
            <ChartLine
              data={isRenderReport ? dataXReports : dataAxioX}
              hasError={isRenderReport ? false : AxioXHasProblem}
            />
            <Styled.ContainerTextDescription>
              <Styled.TextDescription>
                {isRenderReport ? 'Leitura:' : 'Valor atual:'}
              </Styled.TextDescription>
              {isRenderReport ? (
                dataXReports.map((element, index) => (
                  <Styled.TextValueDescriptionReport key={index}>
                    {element}
                  </Styled.TextValueDescriptionReport>
                ))
              ) : (
                <Styled.TextValueDescription>
                  {dataAxioX.length === 0 ? '0' : String(dataAxioXCurrent)}
                </Styled.TextValueDescription>
              )}
            </Styled.ContainerTextDescription>
          </Styled.ContainerGraphic>

          <Styled.ContainerGraphic
            $hasProblem={isRenderReport ? false : AxioYHasProblem}>
            <Styled.TitleGraphic>Eixo Y</Styled.TitleGraphic>
            <ChartLine
              data={isRenderReport ? dataYReports : dataAxioY}
              hasError={isRenderReport ? false : AxioYHasProblem}
            />
            <Styled.ContainerTextDescription>
              <Styled.TextDescription>
                {isRenderReport ? 'Leitura:' : 'Valor atual:'}
              </Styled.TextDescription>
              {isRenderReport ? (
                dataYReports.map((element, index) => (
                  <Styled.TextValueDescriptionReport key={index}>
                    {element}
                  </Styled.TextValueDescriptionReport>
                ))
              ) : (
                <Styled.TextValueDescription>
                  {dataAxioY.length === 0 ? '0' : String(dataAxioYCurrent)}
                </Styled.TextValueDescription>
              )}
            </Styled.ContainerTextDescription>
          </Styled.ContainerGraphic>

          <Styled.ContainerGraphic
            $hasProblem={isRenderReport ? false : AxioZHasProblem}>
            <Styled.TitleGraphic>Eixo Z</Styled.TitleGraphic>
            <ChartLine
              data={isRenderReport ? dataZReports : dataAxioZ}
              hasError={isRenderReport ? false : AxioZHasProblem}
            />
            <Styled.ContainerTextDescription>
              <Styled.TextDescription>
                {isRenderReport ? 'Leitura:' : 'Valor atual:'}
              </Styled.TextDescription>
              {isRenderReport ? (
                dataZReports.map((element, index) => (
                  <Styled.TextValueDescriptionReport key={index}>
                    {element}
                  </Styled.TextValueDescriptionReport>
                ))
              ) : (
                <Styled.TextValueDescription>
                  {dataAxioZ.length === 0 ? '0' : String(dataAxioZCurrent)}
                </Styled.TextValueDescription>
              )}
            </Styled.ContainerTextDescription>
          </Styled.ContainerGraphic>

          <Styled.ContainerButtonCancelRead onPress={closeConnection}>
            <Styled.TextButton>Cancelar leitura</Styled.TextButton>
          </Styled.ContainerButtonCancelRead>
        </Styled.SubContainer>
      </Styled.ViewRelative>
    </Styled.ContainerMaster>
  )
}
