import { Test, TestingModule } from '@nestjs/testing';
import { NaicsController } from './naics.controller';
import { CsvModule } from 'nest-csv-parser';
import { NaicsService } from './naics.service';

describe('NaicsController', () => {
  let controller: NaicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CsvModule],
      providers: [NaicsService],
      controllers: [NaicsController],
    }).compile();

    controller = module.get<NaicsController>(NaicsController);
  });

  it('should return csv output', async () => {
    expect((await controller.getNaics()).total).toBe(2125);
  });
});
