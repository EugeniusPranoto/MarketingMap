import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiDetailsInfoComponent } from './poi-details-info.component';

describe('PoiDetailsInfoComponent', () => {
  let component: PoiDetailsInfoComponent;
  let fixture: ComponentFixture<PoiDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoiDetailsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
