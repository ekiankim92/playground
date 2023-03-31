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
      labels: {
        overflow: "justify",
        style: {
          fontSize: "10px",
        },
      },
      plotLines: [
        {
          color: "red",
          dashStyle: "dash",
          zIndex: 4,
          width: 4,
          value: "test",
          label: {
            text: "bench mark",
            align: "center",
            rotation: 0,
            x: -15,
            y: -3,
            style: {
              color: "red",
            },
          },
        },
      ],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
    legend: {
      enabled: false,
      // enabled: true,
    },
    plotOptions: {
      series: {
        borderWidth: 4,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },
    series: [
      {
        name: "",
        data: [1, 4],
      },
      // {
      //   name: "John",
      //   data: [5, 7, 3],
      // },
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
