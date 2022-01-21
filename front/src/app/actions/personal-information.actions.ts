import { createAction, props } from '@ngrx/store';

export const setPersonalInformation = createAction(
  '[Personal Information Page] Personal Information',
  props<{ firstName: string; lastName: string }>()
);