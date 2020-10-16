import React, { useEffect, useState, FunctionComponent } from 'react';
import { AnimationStyle, VictoryAnimation, VictoryLabel, VictoryPie } from 'victory';
import { PercentPieData, PercentPieProps, PercentPieState } from './PercentPie.UI.Types';

const PercentPie: FunctionComponent<PercentPieProps> = ({ value = 0, inView = true }) => {

    const [state, setState] = useState<PercentPieState>({ percent: 0, data: getData(0) })

    function getData(percent: number): PercentPieData[] {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }

    useEffect(() => {
        if (inView) {
            const newState = { percent: value, data: getData(value) }
            setState(newState);
        }
    }, [])

    return (
        <div>
            <svg viewBox="0 0 400 400" width="100%" height="100%">
                <VictoryPie
                    standalone={false}
                    animate={{ duration: 1000 }}
                    width={400} height={400}
                    data={state.data}
                    innerRadius={120}
                    cornerRadius={25}
                    labels={() => null}
                    style={{
                        data: {
                            fill: ({ datum }) => {
                                const color = datum.y > 30 ? "green" : "red";
                                return datum.x === 1 ? color : "transparent";
                            }
                        }
                    }}
                />
                <VictoryAnimation duration={1000} data={state as unknown as AnimationStyle}>
                    {(newProps) => {
                        return (
                            <VictoryLabel
                                textAnchor="middle" verticalAnchor="middle"
                                x={200} y={200}
                                text={`${Math.round(newProps.percent as number)}%`}
                                style={{ fontSize: 45 }}
                            />
                        );
                    }}
                </VictoryAnimation>
            </svg>
        </div>
    );
};

export default PercentPie;