import { Test, TestingModule } from '@nestjs/testing';
import { NaicsController } from './naics.controller';

describe('NaicsController', () => {
  let controller: NaicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaicsController],
    }).compile();

    controller = module.get<NaicsController>(NaicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
