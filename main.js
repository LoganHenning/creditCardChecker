// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = cardNum => {
  let newNum = [];  
  //console.log(cardNum);
    if(cardNum.length % 2 === 0){
  for(let i = cardNum.length - 1; i >= 0; i--){
    if(i % 2 === 0){
      newNum[i] = cardNum[i] * 2;
       if(newNum[i] > 9){
        newNum[i] = newNum[i] - 9;
      }
    } else if(i % 2 != 0){
      newNum[i] = cardNum[i];
    }
  }
  } else if(cardNum.length % 2 != 0){
   for(let i = cardNum.length - 1; i >= 0; i--){
    if(i % 2 != 0){
      newNum[i] = cardNum[i] * 2;
       if(newNum[i] > 9){
        newNum[i] = newNum[i] - 9;
      }
    } else if(i % 2 === 0){
      newNum[i] = cardNum[i];
    }
  }
  }
  const sumCardNum = newNum.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);
/*console.log(newNum);
console.log(cardNum);*/
if(sumCardNum % 10 === 0){
  return true;
} return false;

}
//console.log(validateCred(valid3));

const findInvalidCards = cardNumList => {
  let invalidCardList = [];
  //console.log(cardNumList);
  for(let i = 0; i < cardNumList.length; i++){
    if(validateCred(cardNumList[i]) === false){
      invalidCardList.push(cardNumList[i]);
    }
  }
  return invalidCardList;
}
//console.log(findInvalidCards(batch));
  let badCards = findInvalidCards(batch);
  //console.log(badCards);
  let companyList = [[3, 'Amex (American Express)'], [4, 'Visa'], [5, 'Mastercard'], [6, 'Discover']];

const idInvalidCardCompanies = badCardNumList => {
  let badNumCompanies = [];
  for(let i = 0; i < badCardNumList.length; i++){
    let firstDigit = badCardNumList[i][0];
    console.log(firstDigit);
    switch (firstDigit) {
      case 3:
        badNumCompanies.push(companyList[0][1]);
        break;
      case 4:
        badNumCompanies.push(companyList[1][1]);
        break;
      case 5:
        badNumCompanies.push(companyList[2][1]);
        break;
      case 6:
        badNumCompanies.push(companyList[3][1]);
        break;
      default: 
        console.log("Company not found");
    }
    }
    let unique = [];
        for(i=0; i < badNumCompanies.length; i++){ 
            if(unique.indexOf(badNumCompanies[i]) === -1) { 
                unique.push(badNumCompanies[i]); 
            } 
        }
     return unique;
    }
 
  
console.log(companyList[0][1]);
idInvalidCardCompanies(badCards);
console.log(idInvalidCardCompanies(badCards));

