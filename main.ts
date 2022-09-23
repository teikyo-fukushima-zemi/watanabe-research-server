function doPost() {
  // GASでpostされたデータを記載する
  const data = JSON.parse(event.postData.contents);
  // データを記載
  const name = data.contents;

  // データを記載
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("保存シート");
  sheet.appendRow([name, createdAt]);
}

function insertRow(name: string) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("保存シート");

  const createdAt = Date.now();
  sheet.appendRow([name, createdAt]);
}
