import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.css']
})
export class UploadImageModalComponent implements OnInit {

  @ViewChild("upload_image_single") upload_image_single!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ //gantiin document.loaded 
  
    var instances = M.Modal.init(this.upload_image_single.nativeElement);

  }
}
