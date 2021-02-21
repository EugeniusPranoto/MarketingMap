import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGeojsonModalComponent } from './upload-geojson-modal.component';

describe('UploadGeojsonModalComponent', () => {
  let component: UploadGeojsonModalComponent;
  let fixture: ComponentFixture<UploadGeojsonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGeojsonModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGeojsonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
