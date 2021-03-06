import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateModalComponent } from './activate-modal.component';

describe('ActivateModalComponent', () => {
  let component: ActivateModalComponent;
  let fixture: ComponentFixture<ActivateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
