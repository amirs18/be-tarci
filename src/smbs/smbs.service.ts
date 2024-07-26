import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

export interface SMB {
  name: string;
  industries: Industry[];
  country?: string;
}

export interface Industry {
  type: string;
  code: string;
  name: string;
  year: string;
  level: string;
}

@Injectable()
export class SmbsService {
  async getSmbs(naics?: string) {
    const smbs: SMB[] = JSON.parse(
      await readFile(join(__dirname, '../../home assignment/smbs.json'), {
        encoding: 'utf-8',
      }),
    );
    if (naics) {
      const filterdSmbs = smbs.filter((smb) => {
        const temp = smb.industries.filter((i) => i.code === naics);
        return temp.length > 0;
      });

      return filterdSmbs;
    } else {
      return smbs;
    }
  }
}
