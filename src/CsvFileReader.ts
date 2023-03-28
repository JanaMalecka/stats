import fs from 'fs' //file system from node js standard library
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string] //tuple

export abstract class CsvFileReader {
  data: MatchData[] = []; //array of arrays that have a date, string....

   constructor(public filename: string) {}

   abstract mapRow(row: string[]): MatchData 

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


