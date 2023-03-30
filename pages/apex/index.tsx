import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartSample() {
  const ten = 10;
  const twenty = 20;
  const thirty = 30;

  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      //   xaxis: {
      //     // categories: [2023, 2042],
      //     // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      //     axisTicks: {
      //       show: false, // x-axis 에 쳐있는 작은 줄
      //     },
      //     tickAmount: 4,
      //     range: 4, // 보폭넓이
      //     // labels: {
      //     //   show: true,
      //     // },
      //   },
      xaxis: {
        axisTicks: {
          show: false,
        },
      },
      tickAmount: 2,
      plotOptions: {
        bar: {
          distributed: true,
          columnWidth: "20%",
          //   barHeight: "100%",
        },
      },
    },
    series: [
      {
        name: "기준배출량",
        data: [
          {
            x: "2021",
            y: 44,
            goals: [
              {
                name: "Expected",
                value: 0,
                strokeWidth: 0,
                strokeDashArray: 0,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2038",
            y: 12,
            goals: [
              {
                name: "Expected",
                value: 44,
                strokeWidth: 12,
                strokeHeight: 4,
                strokeColor: "#775DD0",
              },
            ],
          },
        ],
      },
    ],
  });

  return (
    <div>
      <Chart
        options={dataSample.options}
        series={dataSample.series}
        type="bar"
        width="280"
      />
    </div>
  );
}
