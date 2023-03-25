function getArrayParams(...arr) {
let min = arr[0];
let max = arr[0];
let sum = 0;
let avg;
for (let i = 0; i < arr.length; i++) {
  if(arr[i] > max) {
    max = arr[i];
  };
  if(arr[i] < min) {
    min = arr[i];
  };
  sum = sum + arr[i];
  };
  avg = sum / arr.length; 
  avg = +avg.toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sumOfElements = 0;
  for (let i = 0; i < arr.length; i++) {    
    sumOfElements = sumOfElements + arr[i];
  }
  return sumOfElements;
}

function differenceMaxMinWorker(...arr) {
 let maxElement = Math.max(...arr);
 let minElement = Math.min(...arr);
 let difference = maxElement - minElement;
 if (arr.length === 0) {
  return 0;
 } else {
 return maxElement - minElement;
 }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if(arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {    
      if(arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if(arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {    
      if(arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      } 
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let functionResult;
  for (let i = 0; i < arrOfArr.length; i++) {    
    functionResult = func(...arrOfArr[i]);
    if(functionResult > maxWorkerResult) {
      maxWorkerResult = functionResult;
    }   
  }
  return maxWorkerResult;
}
