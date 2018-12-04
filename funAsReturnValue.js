'use strict';

// functions as return values to create closures


function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }

  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const godzillaWarning = hazardWarningCreator('Godzilla!');
const hurricaneWarning = hazardWarningCreator('Hurricane is coming!');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
godzillaWarning('Maryland');
hurricaneWarning('Portland');

rocksWarning('Centinela Ave and Olympic Blvd');