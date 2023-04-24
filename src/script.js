global.Buffer = require('buffer').Buffer;
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



  // const csvFilePath = '../archive/characters.csv';
  // const stream = fs.createReadStream(csvFilePath);

  // const data = [];

  // stream.pipe(csv())
  //   .on('data', function (row) {
  //     data.push(row);
  //   })
  //   .on('end', function () {
  //     console.log(data);
  //   });




// const csvFilePath = '../archive/characters.csv';
// import csv from 'csv-parser';
// import { createReadStream } from 'fs';
// import jsdom from "jsdom";
// const { JSDOM } = jsdom;

// const data = [];

// createReadStream(csvFilePath)
//   .pipe(csv())
//   .on('data', (row) => {
//     data.push(row);
//   })
//   .on('end', () => {
//     const test_char_columns = Object.keys(data[0]);

//     // Create a new JSDOM object to simulate a browser environment
//     const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);

//     // Use the simulated document object to get a reference to the output element
//     const outputElement = dom.window.document.getElementById('output');

//     // Create a new text node with the output and append it to the output element
//     const outputText = dom.window.document.createTextNode(test_char_columns);
//     outputElement.appendChild(outputText);

//     // Log the entire HTML document to the console to verify the output
//     console.log(dom.serialize());
//   });



// // const csvFilePath = '../archive/characters.csv';
// // import csv from 'csv-parser';
// // import { createReadStream } from 'fs';

// // const data = [];

// // createReadStream(csvFilePath)
// //   .pipe(csv())
// //   .on('data', (row) => {
// //     data.push(row);
// //   })
// //   .on('end', () => {
// //     const test_char_columns = Object.keys(data[0]);
// //     console.log(test_char_columns);
// //     console.log("all data received")
// //     console.log(data)

// //     const outputElement = document.getElementById('output');
// //     const outputText = document.createTextNode(test_char_columns);
// //     outputElement.appendChild(outputText);
// //   });

//   // console.log("connected")

//   // console.log("all data received")
//   // console.log(data)