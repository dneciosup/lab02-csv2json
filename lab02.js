var fs = require(`fs`)
var path = require('path')

var csvjson = require('csvjson')

var read = fs.createReadStream(path.join(__dirname, 'customer-data.xls'))
console.log('Reading file to convert...')
var write = fs.createWriteStream(path.join(__dirname, 'customer-data.json'))
console.log('Creating file to dump json...')
var toObject = csvjson.stream.toObject()
var stringify = csvjson.stream.stringify()
console.log('Defining parameters to convert')
read.pipe(toObject).pipe(stringify).pipe(write);
console.log('Documment done Successful.')
