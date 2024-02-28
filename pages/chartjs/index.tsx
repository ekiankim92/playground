import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "@emotion/styled";

export default function VerticalBars({ heating, cooling }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: "x" as const,
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        bodyColor: "#000", // Set the text color to black
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
        position: "bottom" as const,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: false,
      },
    },
  };

  const labels = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "난방",
        data: [1, 2, 3, 4, 5, 2, 1, 0, 2, 4, 5, 1],
        backgroundColor: "#F55",
        stack: "0",
        pointStyle: "circle",
      },
      {
        label: "냉방",
        data: [6, 7, 8, 9, 10],
        backgroundColor: "#5979D5",
        stack: "1",
        pointStyle: "circle",
      },
    ],
  };

  return (
    <Wrapper className="chart-container">
      <div style={{ padding: 24 }}>월병 냉난방 요구량</div>
      <Bar options={options} data={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 625px;
  height: 217px;

  .chart-container {
    background-color: red;
  }
`;
