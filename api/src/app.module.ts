import { Module } from '@nestjs/common';
import { CountryCodesModule } from './country-codes/country-codes.module';

@Module({
  imports: [CountryCodesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
