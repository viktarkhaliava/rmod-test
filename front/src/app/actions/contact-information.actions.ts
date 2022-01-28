import { createAction, props } from '@ngrx/store';
import { ContactInfo, CountryCode, CountryCodesResponse, UserContactInfo } from '../contact-information/contact-info.model';

export const setContactInformation = createAction(
  '[Contact Information Page] Contact Information',
  props<UserContactInfo>()
);

export const setCountryCodes = createAction(
  '[Contact Information Page] Set Country Codes',
  props<CountryCodesResponse>()
)