import styled from 'styled-components/native'

export const ToastContainer = styled.View<{type: string}>`
  width: 80%;
  background-color: ${({type}) => {
    if (type === 'success') return '#07D07C'
    if (type === 'error') return '#fb3c3c'
    if (type === 'info') return '#4ed3ff'
    return '#07D07C'
  }};
  padding: 15px 20px;
  border-radius: 16px;
`
export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TitleText = styled.Text`
  color: white;
  font-family: 'Inter SemiBold';
  font-size: 17px;
  margin-left: 5px;
`

export const MessageText = styled.Text`
  color: white;
  font-family: 'Inter Regular';
  font-size: 14px;
  margin-top: 10px;
`
