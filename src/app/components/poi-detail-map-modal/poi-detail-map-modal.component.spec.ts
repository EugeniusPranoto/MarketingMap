import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiDetailMapModalComponent } from './poi-detail-map-modal.component';

describe('PoiDetailMapModalComponent', () => {
  let component: PoiDetailMapModalComponent;
  let fixture: ComponentFixture<PoiDetailMapModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoiDetailMapModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiDetailMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
