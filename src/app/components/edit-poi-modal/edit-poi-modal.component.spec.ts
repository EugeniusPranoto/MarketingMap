import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoiModalComponent } from './edit-poi-modal.component';

describe('EditPoiModalComponent', () => {
  let component: EditPoiModalComponent;
  let fixture: ComponentFixture<EditPoiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPoiModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
