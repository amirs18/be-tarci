import { Test, TestingModule } from '@nestjs/testing';
import { SmbsController } from './smbs.controller';
import { SmbsService } from './smbs.service';

describe('SmbsController', () => {
  let controller: SmbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmbsController],
      providers: [SmbsService],
    }).compile();

    controller = module.get<SmbsController>(SmbsController);
  });

  it('should return smbs filterd from the json', async () => {
    expect((await controller.getSmbs('1111')).length).toBeTruthy();
  });
});
