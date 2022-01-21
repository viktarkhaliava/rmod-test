import { createReducer, on } from '@ngrx/store';
import { setContactInformation } from '../actions';
import { ContactInfo } from '../contact-information/contact-info.model';

export const initialState = { country: 0, phoneNumber: 0 } as ContactInfo;

const _contactInfoReducer = createReducer(
  initialState,
  on(setContactInformation, (state: ContactInfo, { country, phoneNumber }) => ({ ...state, country, phoneNumber })),
);

export function contactInfoReducer(state: any, action: any) {
  return _contactInfoReducer(state, action);
}