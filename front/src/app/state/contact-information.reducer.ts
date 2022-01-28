import { Action, createReducer, on } from '@ngrx/store';
import { setContactInformation, setCountryCodes } from '../actions';
import { ContactInfo } from '../contact-information/contact-info.model';

export const initialState: ContactInfo = { country: 0, code: '', phoneNumber: 0, countryCodes: [] };

const _contactInfoReducer = createReducer(
  initialState,
  on(setContactInformation, (state: ContactInfo, { country, phoneNumber, code }) => ({ ...state, code, country, phoneNumber })),
  on(
    setCountryCodes, (state: ContactInfo, { data: countryCodes }) => {
      return { ...state, countryCodes };
    },
  )
);

export function contactInfoReducer(state: any, action: Action) {
  return _contactInfoReducer(state, action);
}
