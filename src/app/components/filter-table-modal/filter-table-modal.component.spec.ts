import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTableModalComponent } from './filter-table-modal.component';

describe('FilterTableModalComponent', () => {
  let component: FilterTableModalComponent;
  let fixture: ComponentFixture<FilterTableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTableModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
