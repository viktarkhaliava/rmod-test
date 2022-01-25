import { Action, createReducer, on } from '@ngrx/store';
import { setContactInformation, setCountryCodes } from '../actions';
import { ContactInfo } from '../contact-information/contact-info.model';

export const initialState = { country: 0, phoneNumber: 0 } as ContactInfo;

const _contactInfoReducer = createReducer(
  initialState,
  on(setContactInformation, (state: ContactInfo, { country, phoneNumber }) => ({ ...state, country, phoneNumber })),
);

const _setCountryCodes = createReducer(
  initialState,
  on(
    setCountryCodes, (state: ContactInfo, { data: countryCodes }) => {
      return { ...state, countryCodes };
    },
  )
);

export function contactInfoReducer(state: any, action: Action) {
  return _contactInfoReducer(state, action);
}

export function setCountryCodesReducer(state: any, action: Action) {
  return _setCountryCodes(state, action);
}