import { Controller, Get } from '@nestjs/common';
import { CountryCodesService } from './country-codes.service';
import { Response } from '../interfaces/response.interface';

@Controller('country-codes')
export class CountryCodesController {
    constructor(
        private countryCodesService: CountryCodesService,
    ) { }

    @Get()
    public async findAll(): Promise<Response> {
        const data = await this.countryCodesService.findAll();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: data
        };
    }
}
