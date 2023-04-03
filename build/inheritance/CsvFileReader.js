"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs")); //file system from node js standard library
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        //thanks to generic class we can customize the different types that are flowing around it on the fly
        this.data = []; //array of arrays that have a date, string....
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8' //we are telling read file sznc about what type of content we expect to find inside a football csv/return string
        })
            .split('\n') // split by new line
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow); // conversion process for each of those values
    }
}
exports.CsvFileReader = CsvFileReader;
