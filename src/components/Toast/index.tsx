import React from 'react'
import {ToastConfigParams} from 'react-native-toast-message'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as Styled from './styles'

const Toast: React.FC<ToastConfigParams<any>> = ({text1, text2, type}) => {
  return (
    <Styled.ToastContainer type={type}>
      <Styled.TitleContainer>
        <MaterialCommunityIcon
          name={type === 'success' ? 'check' : 'alert'}
          size={20}
          color="white"
        />

        <Styled.TitleText>{text1}</Styled.TitleText>
      </Styled.TitleContainer>

      <Styled.MessageText>{text2}</Styled.MessageText>
    </Styled.ToastContainer>
  )
}

export default Toast
