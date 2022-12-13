var XLSX = require('xlsx');

var workbook = XLSX.readFile('./lib/study.xlsx');

var sheets = workbook.Sheets;

var sheetNames = workbook.SheetNames;

// 新建个表
var newBook = XLSX.utils.book_new();

// 遍历表
sheetNames.forEach((element: string) => {
    // 取得表数据
    var aoa = XLSX.utils.sheet_to_json(sheets[element], {header: 1});
    // 处理表中的日期时间数据
    aoa.forEach((item: any) => {
        item = XLSX.SSF.parse_date_code(item[1])
        if (item.D !== 0) {
            
        }
        console.log(item)
    });
    // 制作新表
    var newSheet = XLSX.utils.aoa_to_sheet(aoa);
    // 插入新表
    XLSX.utils.book_append_sheet(newBook, newSheet, `翻译后${element}`);
    // 导出文件
    XLSX.writeFile(newBook, './dist/hihi.xlsx');
});