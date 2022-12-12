var XLSX = require('xlsx');

var workbook = XLSX.readFile('./lib/study.xlsx');

var sheets = workbook.Sheets;

var sheetNames = workbook.SheetNames;

// 新建个表
var newBook = XLSX.utils.book_new();

// 遍历
sheetNames.forEach((element: any) => {
    var aoa = XLSX.utils.sheet_to_json(element, {header: 1});
});


console.log(workbook)