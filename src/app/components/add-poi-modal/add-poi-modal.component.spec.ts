import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoiModalComponent } from './add-poi-modal.component';

describe('AddPoiModalComponent', () => {
  let component: AddPoiModalComponent;
  let fixture: ComponentFixture<AddPoiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoiModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
