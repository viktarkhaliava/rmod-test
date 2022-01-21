import { createReducer, on } from '@ngrx/store';
import { setPersonalInformation } from '../actions';
import { PersonalInfo } from '../personal-information/personal-info.model';

export const initialState = { firstName: '', lastName: '' } as PersonalInfo;

const _personalInfoReducer = createReducer(
  initialState,
  on(setPersonalInformation, (state: PersonalInfo, { firstName, lastName }) => ({ ...state, firstName, lastName })),
);

export function personalInfoReducer(state: any, action: any) {
  return _personalInfoReducer(state, action);
}