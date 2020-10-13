import ReactDOM from "react-dom";
import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";


const MiddleText = ({ cx = 0, cy = 0, payload = { value: 0 }, color = "#F56969" }) => {

    return (
        <g>
            <text
                className="mid"
                x={cx}
                y={cy}
                dy="5%"
                textAnchor="middle"
                fill={color}
            >
                {Math.round(payload.value * 100).toLocaleString() + "%"}
            </text>
        </g>
    );
};

const FillChart = ({ pctComplete = 0 }) => {
    const RED_COLOR = "#F56969",
        YELLOW_COLOR = "#FCCB27",
        GREEN_COLOR = "#30DBB4";
    let displayColor = RED_COLOR;
    if (pctComplete >= 0.8) {
        displayColor = GREEN_COLOR;
    } else if (pctComplete >= 0.6) {
        displayColor = YELLOW_COLOR;
    }
    const data = [{ value: pctComplete }];
    const startPosition = 90,
        endPosition = startPosition - 360 * pctComplete;

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={[{ value: 1 }]}
                    innerRadius="90%"
                    outerRadius="95%"
                    startAngle={startPosition}
                    endAngle={startPosition - 360}
                    isAnimationActive={false}
                    paddingAngle={0}
                    fill="#E6E7ED"
                    dataKey="value"
                />
                <Pie
                    data={data}
                    innerRadius="85%"
                    outerRadius="100%"
                    startAngle={startPosition}
                    endAngle={endPosition}
                    cornerRadius={20}
                    fill={displayColor}
                    dataKey="value"
                    label={<MiddleText color={displayColor} />}
                    labelLine={false}
                    animationBegin={0}
                    animationDuration={1000}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default FillChart;
