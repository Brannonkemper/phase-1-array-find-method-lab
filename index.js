const records = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(record){
   const findElement = record.find(function (record){
    if (record.result === "win")
        return findElement
   })

}
function superbowlWin(record) {
    const winRecord = record.find(entry => entry.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  