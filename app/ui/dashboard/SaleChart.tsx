'use client'

import * as React from 'react';
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect } from 'react';
import { chart } from '@/app/lib/chart';

const salesData = [0,0,0,0,0,825.80,0,0,0,0,0,0];
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
                width={800}
                height={300}
                series={[
                { data: salesData, label: "Sales", id: "sales" },
                ]}
                xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
        </div>
    )
}