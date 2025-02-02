import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { CsvParser } from 'nest-csv-parser';
import { join } from 'path';

class Entity {
  code: number;
  name: string;
}

@Injectable()
export class NaicsService {
  constructor(private readonly csvParser: CsvParser) {}
  async getNAICS() {
    const stream = createReadStream(
      join(__dirname, '../../home assignment/NAICS_2-6_digit_2022_Codes.csv'),
    );
    const entities = await this.csvParser.parse(
      stream,
      Entity,
      undefined,
      undefined,
      { separator: ',' },
    );
    return entities;
  }
}
