export interface CountryCode {
    country: string;
    code: string;
}

export interface CountryCodesResponse {
    data: CountryCode[];
}

export interface UserContactInfo {
    country: number;
    code: string;
    phoneNumber: number;
}

export interface ContactInfo extends UserContactInfo {
    countryCodes: CountryCode[];
}