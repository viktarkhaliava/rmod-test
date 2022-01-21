import { Injectable } from '@nestjs/common';
import { CountryCodeDto } from './dto/country-code.dto';
import * as countryCodes from '../data/country-codes.json';

@Injectable()
export class CountryCodesService {
    public async findAll(): Promise<CountryCodeDto[]> {
        return countryCodes;
    }
}
