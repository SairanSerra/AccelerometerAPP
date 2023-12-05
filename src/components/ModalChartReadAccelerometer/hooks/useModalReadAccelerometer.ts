import {useEffect, useState} from 'react'
import {checkHasProblem, getLastValuesToReports} from '../../../functions'
import {ModalChartReadAccelerometerProps} from '../types'
import Toast from 'react-native-toast-message'
export const useModalReadAccelerometer = ({
  dataAxioX = [],
  dataAxioY = [],
  dataAxioZ = [],
  isVisible,
  closeConnection,
}: ModalChartReadAccelerometerProps) => {
  const [notificationEnable, setNotificationEnable] = useState(true)
  const [isRenderReport, setIsRenderReport] = useState(false)
  const [dataXReports, setDataXReports] = useState<number[]>([])
  const [dataYReports, setDataYReports] = useState<number[]>([])
  const [dataZReports, setDataZReports] = useState<number[]>([])
  const dataAxioXCurrent =
    dataAxioX.length === 0 ? 0 : dataAxioX[dataAxioX.length - 1]
  const dataAxioYCurrent =
    dataAxioY.length === 0 ? 0 : dataAxioY[dataAxioY.length - 1]
  const dataAxioZCurrent =
    dataAxioZ.length === 0 ? 0 : dataAxioZ[dataAxioZ.length - 1]

  const AxioXHasProblem = checkHasProblem(dataAxioXCurrent, 130, -130)
  const AxioYHasProblem = checkHasProblem(dataAxioYCurrent, 120, -120)
  const AxioZHasProblem = checkHasProblem(dataAxioZCurrent, 50, -50)

  const ShowToastError = (message: string) => {
    Toast.show({
      type: 'error',
      text1: 'Problema no motor detectado',
      text2: message,
    })
  }

  const reportsEnable =
    dataAxioX.length >= 10 && dataAxioY.length >= 10 && dataAxioZ.length >= 10

  const handleGenerateSetReport = () => {
    setDataXReports(getLastValuesToReports(dataAxioX))
    setDataYReports(getLastValuesToReports(dataAxioY))
    setDataZReports(getLastValuesToReports(dataAxioZ))
  }

  const handleClearReports = () => {
    setDataXReports([])
    setDataYReports([])
    setDataZReports([])
  }

  useEffect(() => {
    if (notificationEnable === true) {
      if (AxioXHasProblem) {
        ShowToastError(
          `O eixo X excedeu o valor nominal medindo: ${dataAxioXCurrent}`,
        )
      }
      if (AxioYHasProblem) {
        ShowToastError(
          `O eixo Y excedeu o valor nominal medindo: ${dataAxioYCurrent}`,
        )
      }
      if (AxioZHasProblem) {
        ShowToastError(
          `O eixo Z excedeu o valor nominal medindo: ${dataAxioZCurrent}`,
        )
      }
    }
  }, [AxioXHasProblem, AxioYHasProblem, AxioZHasProblem, notificationEnable])

  return {
    AxioXHasProblem,
    AxioYHasProblem,
    AxioZHasProblem,
    setNotificationEnable,
    notificationEnable,
    isVisible,
    closeConnection,
    ShowToastError,
    dataAxioXCurrent,
    dataAxioYCurrent,
    dataAxioZCurrent,
    dataAxioX,
    dataAxioY,
    dataAxioZ,
    handleGenerateSetReport,
    isRenderReport,
    dataXReports,
    dataYReports,
    dataZReports,
    handleClearReports,
    setIsRenderReport,
    reportsEnable,
  }
}
