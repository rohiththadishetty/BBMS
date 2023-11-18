import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionRequestComponent } from './reception-request.component';

describe('ReceptionRequestComponent', () => {
  let component: ReceptionRequestComponent;
  let fixture: ComponentFixture<ReceptionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
