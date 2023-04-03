import fs from 'fs' //file system from node js standard library

export abstract class CsvFileReader<T> { // specify the type to use inside of the class in place of type of data
  //thanks to generic class we can customize the different types that are flowing around it on the fly
  data: T[] = []; //array of arrays that have a date, string....

   constructor(public filename: string) {}

   abstract mapRow(row: string[]): T

   read(): void {
      this.data = fs.readFileSync(this.filename, {
        encoding: 'utf-8' //we are telling read file sznc about what type of content we expect to find inside a football csv/return string
      })
      .split('\n') // split by new line
      .map((row: string): string[] => {  // split a single string row into an array of strings
        return row.split(',')
      })
      .map(this.mapRow) // conversion process for each of those values
    }
}


