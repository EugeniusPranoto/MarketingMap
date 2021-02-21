import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-filter-table-modal',
  templateUrl: './filter-table-modal.component.html',
  styleUrls: ['./filter-table-modal.component.css']
})
export class FilterTableModalComponent implements OnInit {

  @ViewChild("filter_table") filter_table!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  
  }

  ngAfterViewInit(){ //gantiin document.loaded 
  
    var instances = M.Modal.init(this.filter_table.nativeElement);
    
  }

   


}

