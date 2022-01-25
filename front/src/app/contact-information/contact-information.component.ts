import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

import { AppState } from '../state/app.state';
import { ContactInfo, CountryCode } from './contact-info.model';
import { setContactInformation, setCountryCodes } from '../actions/contact-information.actions';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoReviewComponent } from '../user-info-review/user-info-review.component';

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
    public dialog: MatDialog,
  ) {
    this.contactInfo = {} as ContactInfo;
  }
  contactInfo: ContactInfo;

  contactInfoForm: FormGroup = new FormGroup({
    country: new FormControl(''),
    code: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  ngOnInit(): void {
    this.store.select('contactInfo').subscribe((sub) => this.contactInfo = sub);
    this.http.get('http://localhost:3000/country-codes').subscribe((data: any) => {
      this.store.dispatch(setCountryCodes({ data }));
    });

  }

  onSubmit() {
    const phoneNumber = this.contactInfoForm.get('phoneNumber')?.value || '';
    this.store.dispatch(setContactInformation({ phoneNumber, code: this.contactInfo.code, country: this.contactInfo.country }));

    const dialogRef = this.dialog.open(UserInfoReviewComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onCountryChange(event: any) {
    const { value } = event;
    if (value.code) {
      this.store.dispatch(setContactInformation({ country: value.country, code: value.code, phoneNumber: 0 }));
    }
  }
}
