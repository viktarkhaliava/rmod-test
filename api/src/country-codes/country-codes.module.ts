import { Module } from '@nestjs/common';
import { CountryCodesController } from './country-codes.controller';
import { CountryCodesService } from './country-codes.service';

@Module({
  controllers: [CountryCodesController],
  providers: [CountryCodesService],
})
export class CountryCodesModule {}
