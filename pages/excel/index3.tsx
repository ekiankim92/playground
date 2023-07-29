import { useExcelDownloder } from "react-xls";

function ReactXls() {
  const { ExcelDownloder, Type } = useExcelDownloder();
  console.log("Type:", Type);

  // We will make a Workbook contains 2 Worksheets
  const data = {
    // Worksheet named animals
    animals: [
      { name: "cat", category: "animal" },
      { name: "dog", category: "animal" },
      { name: "pig", category: "animal" },
    ],
    // Worksheet named pokemons
    pokemons: [
      { name: "pikachu", category: "pokemon" },
      { name: "Arbok", category: "pokemon" },
      { name: "Eevee", category: "pokemon" },
    ],
  };

  return (
    <div>
      <div>Download Excel</div>
      <ExcelDownloder data={data} filename={"book"} type={"button"}>
        Download
      </ExcelDownloder>
    </div>
  );
}

export default ReactXls;
