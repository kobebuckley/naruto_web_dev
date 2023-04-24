<script src="https://cdn.jsdelivr.net/npm/csv-parser@3.0.0/csv-parser.min.js"></script>

const csvFilePath = '../archive/characters.csv';
const csv = require('csv-parser');
const fs = require('fs');

const data = [];





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