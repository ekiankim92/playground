import ExcelJS from "exceljs";

const dummyData = [
  {
    id: "1",
    title: "First",
    brand: "First",
    price: 10,
    rating: 10,
  },
  {
    id: "2",
    title: "Second",
    brand: "Second",
    price: 20,
    rating: 20,
  },
  {
    id: "3",
    title: "Third",
    brand: "Third",
    price: 30,
    rating: 30,
  },
  {
    id: "4",
    title: "Fourth",
    brand: "Fourth",
    price: 40,
    rating: 40,
  },
];

const dummyData2 = [
  { id: "10", name: "Chris", age: 20 },
  { id: "11", name: "Paula", age: 30 },
  { id: "12", name: "Grace", age: 28 },
];

export default function ExcelJs() {
  const exportExcelFile = () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("My sheet");

    sheet.columns = [
      {
        header: "Id",
        key: "id",
        width: 10,
      },
      {
        header: "Title",
        key: "title",
        width: 10,
      },
      {
        header: "Brand",
        key: "brand",
        width: 10,
      },
      {
        header: "Price",
        key: "price",
        width: 10,
      },
      {
        header: "Rating",
        key: "rating",
        width: 10,
      },
    ];

    dummyData.forEach((el) => {
      sheet.addRow({
        id: el.id,
        title: el.title,
        brand: el.brand,
        price: el.price,
        rating: el.rating,
      });
    });

    sheet.addRow({});

    sheet.columns = [
      {
        header: "Id",
        key: "id",
        width: 10,
      },
      {
        header: "Name",
        key: "name",
        width: 20,
      },
      {
        header: "Age",
        key: "age",
        width: 10,
      },
    ];

    dummyData2.forEach((el) => {
      sheet.addRow({
        id: el.id,
        name: el.name,
        age: el.age,
      });
    });

    sheet.properties.defaultRowHeight = 80;

    sheet.mergeCells("A1:C1"); // Merge Table 1 header cells
    sheet.mergeCells(dummyData.length + 3, 1, dummyData.length + 3, 3); // Merge Table 2 header cells

    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocuments.spreadsheet.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "download.xlsx";
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      <div>Download Excel</div>
      <button onClick={exportExcelFile}>Download</button>
    </>
  );
}
