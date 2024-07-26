import { Test, TestingModule } from '@nestjs/testing';
import { SmbsController } from './smbs.controller';

describe('SmbsController', () => {
  let controller: SmbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmbsController],
    }).compile();

    controller = module.get<SmbsController>(SmbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
