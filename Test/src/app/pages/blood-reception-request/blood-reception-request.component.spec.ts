import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodReceptionRequestComponent } from './blood-reception-request.component';

describe('BloodReceptionRequestComponent', () => {
  let component: BloodReceptionRequestComponent;
  let fixture: ComponentFixture<BloodReceptionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodReceptionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodReceptionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
