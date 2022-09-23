function doPost() {
  // GASでpostされたデータを記載する
  const data = JSON.parse(event.postData.contents);
  // データを記載
  const name = data.contents;
  const createdAt = Date.now();

  // データを記載
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("保存シート");
  sheet.appendRow([name, createdAt]);
}
