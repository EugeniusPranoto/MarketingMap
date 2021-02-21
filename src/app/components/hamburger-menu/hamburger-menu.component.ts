import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  isTrue : boolean = false;

  constructor() { }

  toggleButton(){
    this.isTrue = !this.isTrue;

  }
  
  ngOnInit(): void {
  }


}
