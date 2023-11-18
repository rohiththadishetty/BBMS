import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDonationRequestsComponent } from './all-donation-requests.component';

describe('AllDonationRequestsComponent', () => {
  let component: AllDonationRequestsComponent;
  let fixture: ComponentFixture<AllDonationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDonationRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDonationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
