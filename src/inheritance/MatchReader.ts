import { CsvFileReader } from "./CsvFileReader";
import  {dateStringToDate} from './utils';
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string] //tuple

export class MatchReader extends CsvFileReader<MatchData> { //we are customizing the CSV file reader over inside of MatchReader 
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, //type assertion - it is not only string, it is one of the possible value of that enum H, A, D, 
      row[6]
    ]
  }
}
