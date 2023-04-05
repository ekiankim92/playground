import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import patternFill from "highcharts/modules/pattern-fill";

export default function Chart() {
  if (typeof Highcharts === "object") {
    patternFill(Highcharts);
  }

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Column Chart with Stripped Bars",
    },
    plotOptions: {
      series: {
        stacking: "normal",
        color: {
          pattern: {
            path: {
              d: "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
              strokeWidth: 4,
            },
            width: 10,
            height: 10,
            opacity: 0.5,
          },
        },
      },
    },
    series: [
      {
        name: "Apple",
        data: [7, 6, 9, 14, 18, 21],
      },
      {
        name: "Orange",
        data: [null, null, 10, null, 23],
        color: "blue",
      },
    ],
  };

  return (
    <>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
}
