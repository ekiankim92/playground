import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "@emotion/styled";

export default function Highchart() {
  const options = {
    chart: {
      type: "column",
      width: 400,
      height: 400,
    },
    title: {
      text: "Net Zero Tracker",
    },
    xAxis: {
      categories: ["2023", "2038"],
      gridLineColor: "",
      gridLineWidth: 10,
      // labels: {
      //   overflow: "justify",
      //   style: {
      //     fontSize: "10px",
      //   },
      // },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Fruit eaten",
      },
      gridLineWidth: 1,
      gridLineColor: "#efefef",
      plotLines: [
        {
          color: "#FF0000",
          dashStyle: "dash",
          width: 2,
          value: 4,
          label: {
            text: "oranges",
            align: "center",
          },
        },
        {
          color: "lightcoral",
          dashStyle: "dot",
          width: 2,
          value: 1,
          label: {
            text: "apples",
            align: "left",
          },
        },
      ],
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
            width: 10,
            height: 10,
            opacity: 0.4,
          },
        },
      },
    },
    series: [
      {
        name: "standard",
        // data: [4, 3],
        data: [4, null],
        color: "lightgray",
      },
      {
        name: "target",
        data: [null, 3],
        // color: "lightcoral",
        color: {
          pattern: {
            color: "#d11",
          },
        },
      },
      {
        name: "dummy",
        data: [null, 1],
        color: "#000",
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
