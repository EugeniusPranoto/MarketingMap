import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-add-poi-modal',
  templateUrl: './add-poi-modal.component.html',
  styleUrls: ['./add-poi-modal.component.css']
})
export class AddPoiModalComponent implements OnInit {

  @ViewChild("add_poi") add_poi!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
  
    var instances = M.Modal.init(this.add_poi.nativeElement);

  }

 

}
