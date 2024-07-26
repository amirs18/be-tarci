import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaicsModule } from './naics/naics.module';
import { SmbsModule } from './smbs/smbs.module';

@Module({
  imports: [NaicsModule, SmbsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
