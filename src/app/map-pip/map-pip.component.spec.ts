import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPipComponent } from './map-pip.component';

describe('MapPipComponent', () => {
  let component: MapPipComponent;
  let fixture: ComponentFixture<MapPipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
