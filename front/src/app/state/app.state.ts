import { ContactInfo } from '../contact-information/contact-info.model';
import { PersonalInfo } from '../personal-information/personal-info.model';

export interface AppState {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
}