import { Controller, Get } from '@nestjs/common';
import { SmbsService } from './smbs.service';

@Controller('smbs')
export class SmbsController {
  constructor(private readonly smbsService: SmbsService) {}

  @Get()
  async getSmbs() {
    return await this.smbsService.getSmbs();
  }
}
