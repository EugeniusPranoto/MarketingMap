import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var M:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  @ViewChild("dropdown") dropdown!: ElementRef;
  @ViewChild("datepicker") datepicker!: ElementRef;
  @ViewChild("chips") chips!: ElementRef;
  @ViewChild("autocomplete") autocomplete!: ElementRef;
  
  
  // isTrue : boolean = false;
  
  
  
  title = 'marketing-map-reborn';

  constructor(){

  }

  // toggleButton(){
  //   this.isTrue = !this.isTrue;

  // }

  ngOnInit(): void {
  }
  


  ngAfterViewInit(){
    
    // var instances = M.FormSelect.init(this.dropdown.nativeElement);
    // var instances1 = M.Datepicker.init(this.datepicker.nativeElement);
    // var instances2 = M.Chips.init(this.chips.nativeElement);
  
    document.addEventListener('DOMContentLoaded', function() {
      var options = {
        data: {
          "Black, Jalan Raya Penakan": '../assets/picture/marker10.png',
          "LA Lights, Taman Boedjana": '../assets/picture/marker10.png',
          "LA bold, Jalan Kudus": '../assets/picture/marker10.png' 
        },
      };
      var elems = document.querySelectorAll('.autocomplete');
      var instances = M.Autocomplete.init(elems, options);
    });

    
  }
}
