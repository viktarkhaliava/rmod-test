export interface CountryCode {
    country: string;
    code: string;
}

export interface CountryCodesResponse {
    data: CountryCode[];
}

export interface ContactInfo {
    countryCodes: CountryCode[];
    country: number;
    phoneNumber: number;
}