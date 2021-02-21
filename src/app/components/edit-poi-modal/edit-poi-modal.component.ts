import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-edit-poi-modal',
  templateUrl: './edit-poi-modal.component.html',
  styleUrls: ['./edit-poi-modal.component.css']
})
export class EditPoiModalComponent implements OnInit {

  @ViewChild("edit_poi") edit_poi!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
    var instances = M.Modal.init(this.edit_poi.nativeElement);
    document.getElementById('s-4')?.click();
    
  }


}
