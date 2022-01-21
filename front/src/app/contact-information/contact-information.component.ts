import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from "@angular/router"
import { FormGroup, FormControl } from '@angular/forms';

import { AppState } from '../state/app.state';
import { ContactInfo } from './contact-info.model';

@Component({
  selector: '.app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private router: Router,
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
  }

  onSubmit() {
    
  }
}
