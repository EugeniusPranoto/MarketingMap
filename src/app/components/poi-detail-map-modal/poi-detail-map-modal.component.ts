import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-poi-detail-map-modal',
  templateUrl: './poi-detail-map-modal.component.html',
  styleUrls: ['./poi-detail-map-modal.component.css']
})
export class PoiDetailMapModalComponent implements OnInit {
  isChecked = true;

  @ViewChild("poi_details_map") poi_details_map!: ElementRef;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var instances = M.Modal.init(this.poi_details_map.nativeElement);
    document.getElementById('s-1')?.click();

  }

}
