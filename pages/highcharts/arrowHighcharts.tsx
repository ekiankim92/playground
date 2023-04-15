import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import patternFill from "highcharts/modules/pattern-fill";
import arrowSymbols from "highcharts/highcharts-more";
import styled from "@emotion/styled";

export default function Highchart() {
  if (typeof Highcharts === "object") {
    patternFill(Highcharts);
    arrowSymbols(Highcharts); // import the arrow symbols
  }

  const options = {
    chart: {
      type: "column",
      width: 700,
      height: 400,
    },
    title: {
      text: "Net Zero Tracker",
    },
    xAxis: {
      categories: ["2023", "2038"],
      //   gridLineColor: "",
      //   gridLineWidth: 10,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Fruit eaten",
      },
    },
    legend: {
      enabled: false,
      // enabled: true,
    },
    colors: [
      {
        pattern: {
          patternIndex: 1,
        },
      },
    ],

    plotOptions: {
      column: {
        stacking: "normal",
        colorByPoint: false,
        dataLabels: {
          enabled: false,
        },
      },
      series: {
        color: {
          pattern: {
            path: {
              d: "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
              strokeWidth: 2,
            },
            width: 15,
            height: 15,
            opacity: 0.4,
          },
        },
        dashStyle: "dash",
        width: 2,
        value: 0.5, // set value to 0.5 to center the arrow between categories
        label: {
          text: "oranges",
          align: "center",
        },
        zIndex: 3, // set a higher zIndex to bring the arrow to the front
        marker: {
          enabled: true,
          symbol: "triangle-down",
          fillColor: "#ff726f",
          lineWidth: 2,
          lineColor: "#ffffff",
          radius: 8,
        },
        events: {
          render: function () {
            const chart = this.chart;
            const xAxis = chart.xAxis[0];
            const x1 = xAxis.toPixels(0.5);
            const x2 = xAxis.toPixels(1.5);
            const y = chart.plotHeight + chart.plotTop + 10;
            chart.renderer
              .path(["M", x2 - 10, y - 10, "L", x2, y, x2 - 10, y + 10, "Z"])
              .attr({
                fill: "#ff726f",
                stroke: "#ffffff",
                "stroke-width": 2,
                zIndex: 10,
              })
              .add();
          },
        },
      },
    },
    series: [
      {
        name: "",
        data: [10, null],
        color: "#D3D3D3",
      },
      {
        name: "",
        data: [null, 4],
        color: {
          pattern: {
            path: {
              d: "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
              strokeWidth: 4.5,
            },
            width: 10,
            height: 10,
            opacity: 0.5,
            color: "#ff726f",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            if (
              this.y <
              this.series.data[this.series.data.indexOf(this.point) - 1]
            ) {
              return '<span style="color:red">&#x25BC;</span>';
            } else {
              return "";
            }
          },
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
          y: -10,
          x: 5,
        },
      },
      {
        name: "",
        data: [null, 6],
        color: "#6666FF",
      },
    ],
  };

  return (
    <>
      <div>This page is highcharts</div>
      <Wrapper>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  /* height: 100 */
  /* background: purple; */
`;
