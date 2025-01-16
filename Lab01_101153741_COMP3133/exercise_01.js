const fs = require("fs");
const csv = require("csv-parser");

// Delete canada.txt if it exists
if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
    console.log('Deleted canada.txt');
} else {
    console.log('canada.txt not found');
}

// Delete usa.txt if it exists
if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
    console.log('Deleted usa.txt');
} else {
    console.log('usa.txt not found');
}

const inputFile = 'input_countries.csv';

// Create write streams for each output file (canada.txt / usa.txt)
const canadaStream = fs.createWriteStream("canada.txt");
const usaStream = fs.createWriteStream("usa.txt");

// Add headers to output files
canadaStream.write('country,year,population\n');
usaStream.write('country,year,population\n');

// Read CSV file and process desired rows