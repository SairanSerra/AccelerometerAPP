import styled from 'styled-components/native'

export const ContainerMaster = styled.ScrollView<{$isVisible: boolean}>`
  padding: 10px;
  flex: 0;
  width: 100%;
  height: 100%;
  position: absolute;

  ${({$isVisible}) =>
    $isVisible ? 'z-index: 9999; display:block' : ' display:none'}
`

export const ViewRelative = styled.View`
  position: relative;
`

export const SubContainer = styled.ScrollView`
  padding: 20px;
  flex: 1;
  background-color: #ffff;
  height: 100%;
`

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-top: 15px;
`

export const ContainerButtonCancelRead = styled.TouchableOpacity`
  background-color: #d60003;
  border-radius: 30px;
  height: 50px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-bottom: 60px;
`
export const ContainerTextDescription = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TextDescription = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
`

export const TextValueDescription = styled.Text`
  color: #000;
  font-size: 20px;
  margin-left: 6px;
`
export const TextValueDescriptionReport = styled.Text`
  color: #000;
  font-size: 13px;
  margin-left: 6px;
`

export const TextButton = styled.Text`
  text-align: center;
  margin-top: 12px;
  color: #fff;
`

export const ContainerGraphic = styled.View<{$hasProblem: boolean}>`
  padding: 12px;
  margin-top: 50px;
  border-radius: 20px;
  ${({$hasProblem}) =>
    $hasProblem ? 'border:1px solid #D60010' : 'border:1px solid #627de2'};
`

export const TitleGraphic = styled.Text`
  text-align: center;
  color: #000000;
  font-size: 20px;
`

export const ContainerButtonActions = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`

export const Button = styled.TouchableOpacity<{disabled?: boolean}>`
  padding: 12px;
  border-radius: 20px;
  :disabled {
    background-color: #a2a2a2;
  }
  ${({disabled}) =>
    disabled ? ' background-color: #a2a2a2' : 'background-color: #627de2'}
`
export const TextButtonAction = styled.Text`
  color: #fff;
`
