import { Module } from '@nestjs/common';
import { SmbsController } from './smbs.controller';
import { SmbsService } from './smbs.service';

@Module({
  controllers: [SmbsController],
  providers: [SmbsService],
})
export class SmbsModule {}
