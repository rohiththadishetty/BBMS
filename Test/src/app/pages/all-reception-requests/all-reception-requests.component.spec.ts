import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReceptionRequestsComponent } from './all-reception-requests.component';

describe('AllReceptionRequestsComponent', () => {
  let component: AllReceptionRequestsComponent;
  let fixture: ComponentFixture<AllReceptionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReceptionRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReceptionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
