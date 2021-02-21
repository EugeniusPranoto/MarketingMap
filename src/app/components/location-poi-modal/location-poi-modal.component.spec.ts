import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPoiModalComponent } from './location-poi-modal.component';

describe('LocationPoiModalComponent', () => {
  let component: LocationPoiModalComponent;
  let fixture: ComponentFixture<LocationPoiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationPoiModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPoiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
