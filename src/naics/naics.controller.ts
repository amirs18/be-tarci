import { Controller, Get } from '@nestjs/common';
import { NaicsService } from './naics.service';

@Controller('naics')
export class NaicsController {
  constructor(private readonly naicsService: NaicsService) {}

  @Get()
  getNaics() {
    return this.naicsService.getNAICS();
  }
}
