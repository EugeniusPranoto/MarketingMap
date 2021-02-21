import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {

  @ViewChild("success") success!: ElementRef;

  constructor() { }

  ngOnInit(): void {

    
  }

  

  // refresh():void{
  //   window.location.reload();
  // }

  ngAfterViewInit(){ //gantiin document.loaded 
  
    var instance = M.Modal.init(this.success.nativeElement);

    setTimeout(function() {
      instance.close();
      // window.location.reload();  
    },4000,);



  }

  // $('#modal1').on('hide', function() { window.location.reload(); });
}
