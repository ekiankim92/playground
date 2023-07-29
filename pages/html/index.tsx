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

  const handleGenerateExcel = () => {
    const data = prepareDataForExcel();

    const csvContent = "data:text/csv;charset=utf-8," + data.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const prepareDataForExcel = () => {
    // Example: If your component data is stored in an array of objects
    const data = [
      { name: "John", age: 30, email: "john@example.com" },
      { name: "Jane", age: 25, email: "jane@example.com" },
      // Add more data as needed
    ];

    // Convert the data to CSV format
    const csvData = data.map((item) => Object.values(item).join(","));

    // Add header row (optional)
    const header = Object.keys(data[0]).join(",");
    csvData.unshift(header);

    return csvData;
  };

  return (
    <>
      <button className="button" onClick={handleGeneratePdf}>
        DOWNLOAD
      </button>
      <button className="button" onClick={handleGenerateExcel}>
        DOWNLOAD EXCEL
      </button>

      <Wrapper>
        <div>This is HTML File</div>
        <button className="button" onClick={handleGeneratePdf}>
          DOWNLOAD
        </button>
        <div ref={reportTemplateRef}>
          <ReportTemplate />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #000;
  margin: 100px auto;
  background-color: lightblue;
  /* overflow: hidden; */
  visibility: hidden;
`;
