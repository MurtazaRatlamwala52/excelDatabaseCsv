const xlsx = require('xlsx')
const fs = require('fs')
const path = require('path')
const {Parser} = require('json2csv') 
const {Book} = require('./connection')

async function everything(){
const workbook = xlsx.readFile(`${__dirname}/Book1.xlsx`)
const worksheet = workbook.Sheets[workbook.SheetNames[0]]
const data = xlsx.utils.sheet_to_json(worksheet)
console.log(data)

for(i=0; i<=data.length-1; i++){
    await Book.create({
        name: data[i].name,
        RollNo: data[i].rollNo,
        class: data[i].class
    })
  console.log('Created')
}
// jstocsv(data)
}

async function getData(){
    const books = await Book.findAll()
    // jstocsv(books)
    const books1 = books.map(book => book.toJSON())
    console.log(books1)
    // jstocsv(books1)
    const parser = new Parser()
    const csv = parser.parse(books1)
    const files = fs.readdirSync(`${__dirname}/public`,'utf-8' )
    const count = files.length + 1
    fs.writeFileSync(`${__dirname}/public/jsonToCsv (${count}).csv`, csv)
    console.log(count)
}


// everything()
getData()