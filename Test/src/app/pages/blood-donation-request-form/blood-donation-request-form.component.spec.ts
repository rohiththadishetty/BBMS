import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationRequestFormComponent } from './blood-donation-request-form.component';

describe('BloodDonationRequestFormComponent', () => {
  let component: BloodDonationRequestFormComponent;
  let fixture: ComponentFixture<BloodDonationRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonationRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodDonationRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
