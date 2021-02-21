import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-advanced-search-modal',
  templateUrl: './advanced-search-modal.component.html',
  styleUrls: ['./advanced-search-modal.component.css']
})
export class AdvancedSearchModalComponent implements OnInit {

  @ViewChild("advanced_search") advanced_search!: ElementRef;
  @ViewChild("autocomplete") autocomplete!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){ //gantiin document.loaded 
    
    var instances = M.Modal.init(this.advanced_search.nativeElement);
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
