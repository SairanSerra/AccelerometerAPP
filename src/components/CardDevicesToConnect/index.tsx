import React from 'react'
import {PropsItemCardDevice} from './types'
import * as Styled from './styles'

export const CardItemsDevicesToConnect = ({
  onPress,
  text,
}: PropsItemCardDevice) => {
  return (
    <Styled.ContainerMaster onPress={onPress}>
      <Styled.TextItem>{text}</Styled.TextItem>
    </Styled.ContainerMaster>
  )
}
