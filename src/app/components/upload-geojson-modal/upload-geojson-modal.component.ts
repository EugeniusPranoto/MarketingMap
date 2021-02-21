import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-upload-geojson-modal',
  templateUrl: './upload-geojson-modal.component.html',
  styleUrls: ['./upload-geojson-modal.component.css']
})
export class UploadGeojsonModalComponent implements OnInit {

  @ViewChild("upload_geo") upload_geo!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ //gantiin document.loaded 
  
    var instances = M.Modal.init(this.upload_geo.nativeElement);

  }

}
