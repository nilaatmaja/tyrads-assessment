"use client";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

type Props = {};

const data = [
    {
        name: "Oct",
        price: 60,
        uv: 50,
        pv: 60,
        amt: 2400,
    },
    {
        name: "Nov",
        price: 60,
        uv: 20,
        pv: 25,
        amt: 2210,
    },
    {
        name: "Dec",
        price: 60,
        uv: 20,
        pv: 25,
        amt: 2290,
    },
    {
        name: "Jan",
        price: 60,
        uv: 18,
        pv: 21,
        amt: 2000,
    },
    {
        name: "Feb",
        price: 60,
        uv: 18,
        pv: 21,
        amt: 2181,
    },
];

const SimpleBarChart = (props: Props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="price" />
                <Tooltip />
                <Bar dataKey="pv" fill="#545ee3" />
                <Bar dataKey="uv" fill="#c5c8fd" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SimpleBarChart;
