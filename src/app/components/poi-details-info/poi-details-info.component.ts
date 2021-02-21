import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-poi-details-info',
  templateUrl: './poi-details-info.component.html',
  styleUrls: ['./poi-details-info.component.css']
})
export class PoiDetailsInfoComponent implements OnInit {

  @ViewChild("poi_details_info") poi_details_info!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
    document.getElementById('s-7')?.click();
    var instances = M.Modal.init(this.poi_details_info.nativeElement);

  }

}
