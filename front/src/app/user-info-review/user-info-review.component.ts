import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ContactInfo } from '../contact-information/contact-info.model';
import { PersonalInfo } from '../personal-information/personal-info.model';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-user-info-review',
  templateUrl: './user-info-review.component.html',
  styleUrls: ['./user-info-review.component.scss']
})
export class UserInfoReviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserInfoReviewComponent>,
    private store: Store<AppState>,
  ) {
    this.contactInfo = {} as ContactInfo;
    this.personalInfo = {} as PersonalInfo;
  }
  contactInfo: ContactInfo;
  personalInfo: PersonalInfo;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.store.select('personalInfo').subscribe((sub) => this.personalInfo = sub);
    this.store.select('contactInfo').subscribe((sub) => this.contactInfo = sub);
  }

}
