import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteReportModalComponent } from './complete-report-modal.component';

describe('CompleteReportModalComponent', () => {
  let component: CompleteReportModalComponent;
  let fixture: ComponentFixture<CompleteReportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteReportModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteReportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
