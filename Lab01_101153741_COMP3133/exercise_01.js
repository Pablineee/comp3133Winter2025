const fs = require("fs");
const csv = require("csv-parser");

// Delete canada.txt if it exists
if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
    console.log('Deleted canada.txt');
}

// Delete usa.txt if it exists
if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
    console.log('Deleted usa.txt');
}

const inputFile = 'input_countries.csv';

// Create write streams for each output file (canada.txt / usa.txt)
const canadaStream = fs.createWriteStream("canada.txt");
const usaStream = fs.createWriteStream("usa.txt");

// Add headers to output files
canadaStream.write('country,year,population\n');
usaStream.write('country,year,population\n');

// Read CSV file and process desired rows
fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        // Filter and write to canada.txt
        if (row.country === 'Canada') {
            canadaStream.write(`${row.country},${row.year},${row.population}`);
        }

        // Filter and write to usa.txt
        if (row.country === 'United States') {
            usaStream.write(`${row.country},${row.year},${row.population}`);
        }
    })
    .on('end', () => {
        console.log('Processing complete.');
        canadaStream.end();
        usaStream.end();
    });
