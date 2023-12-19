"use client";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
];
const COLORS = ["#545de6", "#FFBB28", "#FF8042"];

type Props = {};

const HalfPieChart = (props: Props) => {
    return (
        <PieChart width={300} height={175}>
            <Legend verticalAlign="bottom" align="center" />
            <Pie
                data={data}
                cx={150}
                cy={100}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                legendType="circle"
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
        </PieChart>
    );
};

export default HalfPieChart;
