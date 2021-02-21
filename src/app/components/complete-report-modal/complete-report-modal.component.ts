import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-complete-report-modal',
  templateUrl: './complete-report-modal.component.html',
  styleUrls: ['./complete-report-modal.component.css']
})
export class CompleteReportModalComponent implements OnInit {

  @ViewChild("poi_detail") poi_detail!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ //gantiin document.loaded 
    
    var instances = M.Modal.init(this.poi_detail.nativeElement);
  
  }

}
