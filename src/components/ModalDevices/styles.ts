import styled from 'styled-components/native'

export const ContainerMaster = styled.Modal`
  padding: 10px;
`

export const ContainerModal = styled.View`
  background-color: #f2f2f2;
  border-radius: 30px;
  box-shadow: 10px 5px 5px black;
  padding: 20px;
  display: flex;
  gap: 20px;
  flex: 1;
`

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`

export const ContainerMasterItems = styled.ScrollView`
  height: 100px;
  display: flex;
  flex-direction: column;
`

export const ContainerItems = styled.TouchableOpacity`
  border-radius: 30px;
  border: 1px solid #1000d6;
  padding: 10px;
  margin-bottom: 10px;
`

export const TextItem = styled.Text`
  color: #000;
  text-align: center;
`

export const ContainerButton = styled.TouchableOpacity`
  background-color: #d60003;
  border-radius: 30px;
  height: 50px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-bottom: 30px;
`

export const TextButton = styled.Text`
  text-align: center;
  margin-top: 12px;
  color: #fff;
`
export const ContainerIcon = styled.View`
  display: flex;
  justify-items: center;
  align-items: center;
`
