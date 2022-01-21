import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from "@angular/router"
import { FormGroup, FormControl } from '@angular/forms';

import { setPersonalInformation } from '../actions/personal-information.actions';
import { AppState } from '../state/app.state';
import { PersonalInfo } from './personal-info.model';

@Component({
  selector: '.app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.personalInfo = {} as PersonalInfo;
  }
  personalInfo: PersonalInfo;

  personalInfoForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {
    this.store.select('personalInfo').subscribe((sub) => this.personalInfo = sub);
  }

  onSubmit(): void {
    const firstName = this.personalInfoForm.get('firstName')?.value || '';
    const lastName = this.personalInfoForm.get('lastName')?.value || '';

    this.store.dispatch(setPersonalInformation({ firstName, lastName }));
    this.router.navigate(['/contact-info']);
  }
}
