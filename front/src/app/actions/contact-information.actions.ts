import { createAction, props } from '@ngrx/store';
import { ContactInfo } from '../contact-information/contact-info.model';

export const setContactInformation = createAction(
  '[Contact Information Page] Contact Information',
  props<ContactInfo>()
);