import { chart } from "@/app/lib/chart";
import SaleChart from "./SaleChart";
import { ChartData } from "@/type";
import { QueryResultRow } from "@vercel/postgres";

function getChartData(data : QueryResultRow[]) {
  let chartData = [0,0,0,0,0,0,0,0,0,0,0,0]
  data.forEach((row) => {
    chartData[row.date.getMonth()] = row.total
  })
  return chartData
}

export default async function DashboardChart() {
  const data = (await chart.dashboard()).rows
  
  return (
    <div>
      <h2 className="text-2xl text-coal pl-4 font-semibold mb-2">Monthly sales</h2>
      <div className="bg-white rounded-lg">
        <SaleChart salesData={getChartData(data)}/>
      </div>
    </div>
  );
}