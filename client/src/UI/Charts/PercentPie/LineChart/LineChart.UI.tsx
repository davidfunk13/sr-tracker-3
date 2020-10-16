import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

const LineChart = () => {
    return (
        <VictoryChart theme={VictoryTheme.material} >
            <VictoryLine
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
                style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" }
                }}
                data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 }
                ]}
            />
        </VictoryChart>
    )
};

export default LineChart;