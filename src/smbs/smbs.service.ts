import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class SmbsService {
  async getSmbs() {
    const smbs = JSON.parse(
      await readFile(join(__dirname, '../../home assignment/smbs.json'), {
        encoding: 'utf-8',
      }),
    );
    return smbs;
  }
}
