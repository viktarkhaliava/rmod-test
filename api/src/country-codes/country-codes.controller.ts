import { Controller, Get } from '@nestjs/common';
import { CountryCodesService } from './country-codes.service';
import { CountryCodeDto } from './dto/country-code.dto';

@Controller('country-codes')
export class CountryCodesController {
    constructor (
        private countryCodesService: CountryCodesService,
    ) {}

    @Get()
    public async findAll(): Promise<CountryCodeDto[]> {
        return this.countryCodesService.findAll();
    }
}
