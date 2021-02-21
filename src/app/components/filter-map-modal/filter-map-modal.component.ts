import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-filter-map-modal',
  templateUrl: './filter-map-modal.component.html',
  styleUrls: ['./filter-map-modal.component.css']
})
export class FilterMapModalComponent implements OnInit {

  @ViewChild("filter_map") filter_map!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ //gantiin document.loaded 
  
    var instances = M.Modal.init(this.filter_map.nativeElement);
  }



  checks = false;

  checkAll(e:any) {
    if(e.target.checked == true){
      this.checks = true;
    }else{
      this.checks = false;
    }
  }



  
  toggle = true;
  status = 'Enable'; 

  enableDisableRule(e:any) {
    e.isClicked = !e.isClicked;
  }
  
  filter: any[] = [
    {
      "name": "Shop",
      "isClicked": false,
    },
    {
      "name": "Outlet/Small Retail",
      "isClicked": false,
    },
    {
      "name": "Office",
      "isClicked": false,
    },
    {
      "name": "MCD",
      "isClicked": false,
    },
    {
      "name": "OOH",
      "isClicked": false,
    },
    {
      "name": "Venue",
      "isClicked": false,
    },
    {
      "name": "Others",
      "isClicked": false,
    }
  ];
}


