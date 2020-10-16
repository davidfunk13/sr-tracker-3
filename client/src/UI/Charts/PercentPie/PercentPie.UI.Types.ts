export interface PercentPieProps {
    value: number
    inView?: boolean
}

export type PercentPieData = {
    x: number
    y: number
}

export type PercentPieState = {
    percent: number
    data: PercentPieData[]
}
