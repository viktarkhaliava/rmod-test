import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoReviewComponent } from './user-info-review.component';

describe('UserInfoReviewComponent', () => {
  let component: UserInfoReviewComponent;
  let fixture: ComponentFixture<UserInfoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
