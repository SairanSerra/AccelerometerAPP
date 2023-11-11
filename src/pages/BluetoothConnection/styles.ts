import styled from 'styled-components/native'

export const ContainerMaster = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  justify-self: center;
  align-content: center;
`
export const ScrollView = styled.ScrollView`
  display: flex;
  justify-self: center;
  align-content: center;
`

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #000000;
  font-size: 30px;
  margin-top: 20px;
`

export const Button = styled.TouchableOpacity`
  background-color: #627de2;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`

export const TextButton = styled.Text`
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-size: 15px;
`

export const ContainerButton = styled.View`
  display: flex;
  justify-items: center;
  align-self: center;
  width: 70%;
  margin-top: 90%;
`

export const ContainerDevicesToConnect = styled.View`
  margin-top: 70px;
  padding: 30px;
`
