import { CountryCodeDto } from "../country-codes/dto/country-code.dto";

export interface Response {
    statusCode: number;
    body: CountryCodeDto[];
    headers?: { [key: string]: string | boolean };
}