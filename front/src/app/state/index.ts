import { personalInfoReducer } from './personal-information.reducer';
import { contactInfoReducer } from './contact-information.reducer';

export const rootStore = {
    personalInfo: personalInfoReducer,
    contactInfo: contactInfoReducer,
}