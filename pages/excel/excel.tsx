const exportToCSV = () => {
    const columnsToExport = ['brand', 'model']; // Select the columns you want to export

    const csvData = convertToCSV(cars.value, columnsToExport);
    downloadCSV(csvData, 'exported_data.csv');
  };

  const convertToCSV = (data, columnsToExport) => {
    const header = columnsToExport.join(',');
    const rows = data.map((row) => columnsToExport.map((column) => row[column]).join(','));
    return [header, …rows].join('\n');
  };

  const downloadCSV = (data, filename) => {
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }; 