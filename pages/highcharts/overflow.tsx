import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef } from "react";

const linePattern = "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11";

export default function Overflow() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const color_grad1 = {
    linearGradient: {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 1,
    },
    stops: [
      [0, "#ff3399"],
      [0.5, "#ffffff"], // middle
      [1, "#3366AA"],
    ],
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      //   console.log("hello world")
    }
  }, []);

  const options = {
    chart: {
      type: "column",
    },
    plotOptions: {
      column: {
        color: {
          pattern: {
            path: {
              d: "M 3 3 L 8 3 L 8 8 Z",
              fill: "#102045",
            },
            width: 12,
            height: 12,
            color: "#907000",
            opacity: 0.5,
          },
        },
      },
    },
    series: [
      {
        data: [3, 2, 4, 6],
        color: "red",
      },
      {
        data: [1, 3, 2, 4, 5],
        color: color_grad1,
      },
      {
        data: [6, 8, 3, 1, 4],
        color: "yellow",
      },
    ],
  };
  return (
    <>
      <div>Overflow Page</div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </>
  );
}
