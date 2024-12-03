const fs = require('fs');
const csv = require('csv-parser'); // Import the csv-parser module

const inputCsvFilePath = 'graph_summary.csv'; // Path to your CSV file
const outputJsonFilePath = 'output.json'; // Path where you want to save the output JSON

// Array to hold the formatted data
let data = [];

// Read the CSV file and parse it
fs.createReadStream(inputCsvFilePath)
  .pipe(csv())  // Pipe the file content to the csv-parser
  .on('data', (row) => {
    // For each row, transform it to the desired structure
    const transformedRow = {
      source: row.source,   // Assuming your CSV has a 'source' column
      target: row.target,   // Assuming your CSV has a 'target' column
      info: row.value       // Assuming your CSV has a 'value' column
    };
    data.push(transformedRow); // Push the transformed row to the data array
  })
  .on('end', () => {
    // Once parsing is done, write the formatted data to a JSON file
    fs.writeFileSync(outputJsonFilePath, JSON.stringify(data, null, 2));
    console.log(`CSV successfully converted to JSON and saved to ${outputJsonFilePath}`);
  })
  .on('error', (err) => {
    console.error('Error reading the CSV file:', err);
  });