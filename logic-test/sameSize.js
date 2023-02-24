// Soal 2 Map Array Data
function findSameSize(dataList) {
    let finalResult = [];
    let total = 1;
    for (let i = 0; i < dataList.length; i++) {
      total *= dataList[i];
    }
    for (let i = 0; i < dataList.length; i++) {
      finalResult.push(Math.floor(total / dataList[i]));
    }
    return finalResult;
  }
  console.log(findSameSize([3,27,4,2]));
