import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionHistoryComponent } from './reception-history.component';

describe('ReceptionHistoryComponent', () => {
  let component: ReceptionHistoryComponent;
  let fixture: ComponentFixture<ReceptionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
