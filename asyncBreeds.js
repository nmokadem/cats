// asyncBreeds.js
const fs = require('fs');

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) return data;
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
// };

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone, functionToRunWhenThingsAreNotFound) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      // CHANGE: Pass data into callback instead of returning it directly
      //console.log("In readFile's Callback: it has the data.");
      functionToRunWhenThingsAreDone(data);
    } else {
      functionToRunWhenThingsAreNotFound(undefined);
    }
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// CHANGE 1: Moved the console.log into a new function:
const printOutNotFound = breed => {
  console.log('Not Found : ', breed) // => print out record not found.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
//breedDetailsFromFile('Bombay', printOutCatBreed, printOutNotFound);  //test run form test/asyncBreeds/Test.js
breedDetailsFromFile('Siamese', printOutCatBreed, printOutNotFound);  //test run form test/asyncBreeds/Test.js

module.exports = breedDetailsFromFile;
