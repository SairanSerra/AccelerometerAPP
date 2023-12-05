import React from 'react'
import {BluetoothConnection} from './src/pages/BluetoothConnection'
import Toast, {ToastConfigParams} from 'react-native-toast-message'
import CustomToast from './src/components/Toast'

function App(): JSX.Element {
  const renderCustomToast = (props: ToastConfigParams<any>) => (
    <CustomToast {...props} />
  )

  return (
    <>
      <BluetoothConnection />
      <Toast
        position="top"
        config={{
          success: renderCustomToast,
          error: renderCustomToast,
          info: renderCustomToast,
        }}
      />
    </>
  )
}

export default App
