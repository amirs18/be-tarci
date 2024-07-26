import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaicsModule } from './naics/naics.module';

@Module({
  imports: [NaicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
