import React from 'react'
import {LineChart, Grid, YAxis} from 'react-native-svg-charts'
import {LineChartProps} from './types'
import {View} from 'react-native'

export const ChartLine = ({data, hasError = false}: LineChartProps) => {
  const contentInset = {top: 20, bottom: 20}
  return (
    <View style={{height: 200, flexDirection: 'row'}}>
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
          fill: 'grey',
          fontSize: 13,
        }}
        numberOfTicks={10}
        formatLabel={(value) => `${value}`}
      />
      <LineChart
        style={{flex: 1, marginLeft: 16}}
        data={data}
        svg={{stroke: hasError ? '#d60003' : 'rgb(134, 65, 244)'}}
        contentInset={contentInset}>
        <Grid />
      </LineChart>
    </View>
  )
}
