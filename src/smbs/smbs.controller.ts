import { Controller, Get, Query } from '@nestjs/common';
import { SmbsService } from './smbs.service';

@Controller('smbs')
export class SmbsController {
  constructor(private readonly smbsService: SmbsService) {}

  @Get()
  async getSmbs(@Query('naics') naics?: string) {
    return await this.smbsService.getSmbs(naics);
  }
}
