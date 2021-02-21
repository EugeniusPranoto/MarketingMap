import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-legend-modal',
  templateUrl: './legend-modal.component.html',
  styleUrls: ['./legend-modal.component.css']
})
export class LegendModalComponent implements OnInit {

  @ViewChild("legend") legend!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ //gantiin document.loaded 
  
    var instances = M.Modal.init(this.legend.nativeElement);

  }

}
