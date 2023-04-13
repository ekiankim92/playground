import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Head from "next/head";
import styled from "@emotion/styled";

export default function Overflow() {
  const options = {
    chart: {
      // type: "column",
      type: "line",
      zoomType: "x",
      backgroundColor: "transparent",
    },
    xAxis: {
      min: 2001,
      max: 2014,
      categories: [
        2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
        2013, 2014,
      ],
      scrollbar: {
        enabled: true,
      },
    },
    series: [
      {
        name: "Tokyo",
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
          30, 32.4, 36.6, 40, 42.5,
        ],
      },
    ],
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="http://code.highcharts.com/stock/highstock.js"
        ></script>
        <script src="http://code.highcharts.com/modules/exporting.js"></script>
      </Head>
      <Wrapper>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  overflow: scroll;
  margin: 40px auto;
  border: 1px solid #000;
`;
