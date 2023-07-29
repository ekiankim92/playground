import React from "react";
import * as XLSX from "xlsx";

export default function DownloadExcel() {
  const data = [
    { column: "건물명", values: ["주소"] },
    { column: "aaa", values: ["용도"] },
    { column: "bbb", values: ["연면적"] },
    // { column: "", values: [] },
  ];

  const download = () => {
    const workbook = XLSX.utils.book_new();

    // Create a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet([
      ["건물 정보"],
      data.map((item) => item.column), // Header row
      ...data.map((item) => item.values), // Data rows
    ]);

    worksheet["!merges"] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: data.length + 1 } },
    ];

    const titleCellStyle = {
      font: { bold: true, size: 16 },
      alignment: { horizontal: "center", vertical: "center" },
    };
    const titleCell = worksheet[XLSX.utils.encode_cell({ r: 0, c: 0 })];
    titleCell.s = titleCellStyle;

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "시트 이름");

    // Write the workbook to a file
    XLSX.writeFile(workbook, "파일명.xlsx");
  };

  return (
    <>
      <div>Download to Excel</div>
      <button onClick={download}>Download</button>
    </>
  );
}
