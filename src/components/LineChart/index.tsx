import React from 'react'
import * as Styled from './styles'
import {LineChart, Grid} from 'react-native-svg-charts'
import {LineChartProps} from './types'
import * as shape from 'd3-shape'

export const ChartLine = ({data}: LineChartProps) => {
  return (
    <LineChart
      style={{height: 200}}
      data={data}
      svg={{stroke: 'rgb(134, 65, 244)'}}
      contentInset={{top: 20, bottom: 20}}>
      <Grid />
    </LineChart>
  )
}
