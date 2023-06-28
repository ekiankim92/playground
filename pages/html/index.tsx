import styled from "@emotion/styled";
import { useRef } from "react";
import jsPDF from "jspdf";
import ReportTemplate from "./template";

export default function HtmlFile() {
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      // format: "portrait",
      unit: "px",
    });

    doc.setFont("Inter-Regular", "normal");

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });

    console.log("current:", reportTemplateRef.current);
  };

  return (
    <Wrapper>
      <div>This is HTML File</div>
      <button className="button" onClick={handleGeneratePdf}>
        DOWNLOAD
      </button>
      <div ref={reportTemplateRef}>
        <ReportTemplate />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  /* border: 1px solid #000; */
  margin: 100px auto;
`;
