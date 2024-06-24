'use client'

import * as React from 'react';
import { BarChart } from "@mui/x-charts/BarChart";

const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default function SaleChart({salesData} : {salesData: number[]}) {
    return (
        <div>
            <BarChart
                colors={["#E45959"]}
                height={500}
                series={[
                { data: salesData, label: "Sales($)", id: "sales" },
                ]}
                xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
        </div>
    )
}