import { Buffer } from 'buffer';

// import { Buffer } from 'buffer';
// global.Buffer = require('buffer').Buffer;
console.log("connected to server")






// import csvParse from 'csv-parse';


 csvFilePath = '../archive/characters.csv';
 import csv from 'csv-parser';
 
//  import fs from 'fs';

const fs = require('fs');
const data = [];

fs(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    const test_char_columns = Object.keys(data[0]);
    console.log(test_char_columns);
    console.log("all data received")
    console.log(data)

    const outputElement = document.getElementById('output');
    const outputText = document.createTextNode(test_char_columns);
    outputElement.appendChild(outputText);
  });


