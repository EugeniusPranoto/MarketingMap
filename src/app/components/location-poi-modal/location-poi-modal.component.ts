import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-location-poi-modal',
  templateUrl: './location-poi-modal.component.html',
  styleUrls: ['./location-poi-modal.component.css']
})
export class LocationPoiModalComponent implements OnInit {

  @ViewChild("location_poi") location_poi!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
  
    var instances = M.Modal.init(this.location_poi.nativeElement);

  }

}
