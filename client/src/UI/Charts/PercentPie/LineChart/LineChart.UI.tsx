import { Typography } from '@material-ui/core';
import React, { FunctionComponent, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryZoomContainer } from 'victory';
import { LineChartData } from '../../../../App.Types';
interface LineChartProps {
    data: LineChartData[]
}

const LineChart: FunctionComponent<LineChartProps> = ({ data }) => {

    return (
        <VictoryChart containerComponent={<VictoryZoomContainer />} theme={VictoryTheme.material} >
            <VictoryLine
                animate={{
                    duration: 2000,
                    onLoad: { duration: 2000 }
                }}
                style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" }
                }}
                data={data}
            />
        </VictoryChart>
    )
};

export default LineChart;