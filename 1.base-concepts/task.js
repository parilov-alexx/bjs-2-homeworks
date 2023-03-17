"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d;
  d = b ** 2 - 4 * a * c;
  if(d > 0) {
    let squareFirst = (- b + Math.sqrt(d) ) / (2 * a);
    let squareSecond = (- b - Math.sqrt(d) ) / (2 * a);
    arr.push(squareFirst,squareSecond);
  } else if(d === 0) {
   let squareSingle =  - b / (2 * a);
   arr.push(squareSingle);
  };

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent) === true) {
    return false;
  } else if(isNaN(contribution) === true) {
    return false;
  } else if(isNaN(amount) === true) {
    return false;
  } else {
let P = (percent / 100) / 12;
let S = amount - contribution;
let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
let totalAmount = monthlyPayment * countMonths;
totalAmount = +totalAmount.toFixed(2);
return totalAmount;
  }
}