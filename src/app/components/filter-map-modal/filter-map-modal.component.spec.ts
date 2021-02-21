import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMapModalComponent } from './filter-map-modal.component';

describe('FilterMapModalComponent', () => {
  let component: FilterMapModalComponent;
  let fixture: ComponentFixture<FilterMapModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMapModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
