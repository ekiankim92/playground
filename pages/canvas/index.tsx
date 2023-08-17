import styled from "@emotion/styled";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import { useRef } from "react";
import PieGraph from "./graph";
import DataList from "./list";
import Portfolio from "./portfolio";

export default function Canvas() {
  const reportRef = useRef(null);

  //   const onClickDownloadPdf = () => {
  //     if (reportRef.current) {
  //       const input = reportRef.current;
  //       const pdf = new jsPDF("p", "mm", "a4");

  //       html2canvas(input).then((canvas) => {
  //         const imgData = canvas.toDataURL("image/png");
  //         console.log("imgData:", imgData);

  //         pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
  //         pdf.save("report.pdf");
  //       });
  //     }
  //   };

  //   const download = () => {
  //     window.scrollTo(0, 0);
  //     setTimeout(() => {
  //       const divToPrint = document.querySelector(
  //         "#element-to-print"
  //       ) as HTMLElement;
  //       html2canvas(divToPrint).then((canvas) => {
  //         const imgData = canvas.toDataURL("image/png");
  //         const imgWidth = 190;
  //         const pageHeight = 290;
  //         const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //         let heightLeft = imgHeight;
  //         const doc = new jsPDF();
  //         let position = 0;
  //         doc.addImage(imgData, "PNG", 10, 0, imgWidth, imgHeight + 25);
  //         heightLeft -= pageHeight;
  //         while (heightLeft >= 0) {
  //           position = heightLeft - imgHeight;
  //           doc.addPage();
  //           doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight + 25);
  //           heightLeft -= pageHeight;
  //         }
  //         doc.save("download.pdf");
  //       });
  //     }, 1000);
  //   };

  const download = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const divToPrint = document.querySelector(
        "#element-to-print"
      ) as HTMLElement;
      html2canvas(divToPrint).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 190;
        const pageHeight = 290;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        const doc = new jsPDF();
        let position = 0;

        while (heightLeft >= 0) {
          doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight + 25);

          if (heightLeft > pageHeight) {
            heightLeft -= pageHeight;
            position -= pageHeight;
          } else {
            position -= heightLeft;
            heightLeft = -1; // Exit the loop
          }

          if (heightLeft >= 0) {
            doc.addPage();
          }
        }

        doc.save("download.pdf");
      });
    }, 1000);
  };

  return (
    <>
      <Wrapper>
        <div>This is download portion</div>
        <button onClick={download}>Download</button>
      </Wrapper>
      {/* <button onClick={createPdf}>Download</button> */}
      {/* <body ref={reportRef} style={{ width: 3000, height: 3000 }} id="loader"> */}
      <div
        ref={reportRef}
        id="element-to-print"
        style={{
          width: "100%",
          zIndex: -999,
          position: "fixed",
          right: 880,
          background: "green",
        }}
      >
        <Portfolio />
        <DataList />
        <DataList />
        <PieGraph />
        <PieGraph />
        <PieGraph />
        <PieGraph />
      </div>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  /* background: red; */
  /* position: relative; */
`;
