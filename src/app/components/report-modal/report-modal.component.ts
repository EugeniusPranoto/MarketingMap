import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  @ViewChild("upload_image_desc") upload_image_desc!: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  
    var instances = M.Modal.init(this.upload_image_desc.nativeElement);

  }

}
