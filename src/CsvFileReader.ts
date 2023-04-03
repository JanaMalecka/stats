import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
    .readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n') // split by new line
    .map((row: string): string[] => {  // split a single string row into an array of strings
      return row.split(',')
    })
  }
}