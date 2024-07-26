import { Module } from '@nestjs/common';
import { NaicsService } from './naics.service';
import { NaicsController } from './naics.controller';
import { CsvModule } from 'nest-csv-parser';

@Module({
  imports: [CsvModule],
  providers: [NaicsService],
  controllers: [NaicsController],
})
export class NaicsModule {}
