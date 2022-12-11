var XLSX = require('xlsx');

var workbook = XLSX.readFile('./lib/17279000088888_test.xls').Workbook;

var sheets = workbook.Sheets

// 遍历sheet做处理

sheets.forEach((element: any) => {
    var aoa = XLSX.utils.sheet_to_json(element, {header: 1});
});


console.log(workbook)