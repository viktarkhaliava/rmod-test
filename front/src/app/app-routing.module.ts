import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

const routes: Routes = [
  { path: 'personal-info', component: PersonalInformationComponent },
  { path: 'contact-info', component: ContactInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
