import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

import { AppState } from '../state/app.state';
import { ContactInfo, CountryCode } from './contact-info.model';
import { setCountryCodes } from '../actions/contact-information.actions';

@Component({
  selector: '.app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private http: HttpClient,
  ) {
    this.contactInfo = {} as ContactInfo;
  }
  contactInfo: ContactInfo;

  contactInfoForm: FormGroup = new FormGroup({
    country: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  ngOnInit(): void {
    this.store.select('contactInfo').subscribe((sub) => this.contactInfo = sub);
    this.http.get('http://localhost:3000/country-codes').subscribe((data: any) => {
      this.store.dispatch(setCountryCodes({ data }));
    });
    console.log(this.contactInfo, 'this.contactInfo');
    
  }

  onSubmit() {
    
  }
}
