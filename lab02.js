var fs = require(`fs`)
var path = require('path')

var csvjson = require('csvjson')

var fromFName ='customer-data.xls'
var toFName = 'customer-data.json'

var read = fs.createReadStream(path.join(__dirname, fromFName))
console.log('Reading file to convert...')
var write = fs.createWriteStream(path.join(__dirname, toFName))
console.log('Creating file to dump json...')
var toObject = csvjson.stream.toObject()
var stringify = csvjson.stream.stringify(2)
console.log('Defining parameters to convert')
read.pipe(toObject).pipe(stringify).pipe(write);
console.log('Documment done Successful.')
