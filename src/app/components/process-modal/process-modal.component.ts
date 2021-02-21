import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-process-modal',
  templateUrl: './process-modal.component.html',
  styleUrls: ['./process-modal.component.css']
})
export class ProcessModalComponent implements OnInit {

  @ViewChild("view_poi_details") view_poi_details!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ //gantiin document.loaded 
  
    var instances = M.Modal.init(this.view_poi_details.nativeElement);

  }

}
