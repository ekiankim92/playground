import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Head from "next/head";

export default function Overflow() {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    series: [
      {
        data: [3, 2, 4, 6],
        color: "red",
      },
      {
        data: [
          {
            y: 3,
            color: {
              pattern: {
                path: {
                  stroke: "#000000",
                  "stroke-width": 2,
                  rotation: 45,
                  d: ["M", 10, 10, "L", 30, 30, "z"],
                },
                width: 40,
                height: 40,
              },
            },
          },
        ],
      },
    ],
  };
  return (
    <>
      <Head>
        <script src="https://code.highcharts.com/modules/pattern-fill.js"></script>
      </Head>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
