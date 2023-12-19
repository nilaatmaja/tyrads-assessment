"use client";
import { Line, LineChart } from "recharts";

type SimpleChartItemType = {
    name: string;
    uv: number;
    pv: number;
    amt: number;
};

type SimpleChartType = {
    data: SimpleChartItemType[];
    height: number | undefined;
    width: number | undefined;
};

const SimpleChart = ({ data, width, height }: SimpleChartType) => {
    return (
        <LineChart width={width} height={height} data={data}>
            <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
            />
        </LineChart>
    );
};

export default SimpleChart;
