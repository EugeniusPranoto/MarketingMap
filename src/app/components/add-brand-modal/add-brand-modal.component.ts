import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var M:any;
declare var j:any;
declare var table:any;
declare var input:any;


@Component({
  selector: 'app-add-brand-modal',
  templateUrl: './add-brand-modal.component.html',
  styleUrls: ['./add-brand-modal.component.css']
})
export class AddBrandModalComponent implements OnInit {

  @ViewChild("add_brand") add_brand!: ElementRef;

  constructor() { }


    

  searchFunction(event:any) {
      //var input :any = (<HTMLInputElement>document.getElementById("input"))?.value;
      var input :any = event.target.value;
      var table = document.getElementById("myTable");
      var tr :any = "";
      var td :any = "";
      //getElementById("myTable").

      var j,filter, flag, i, txtValue;
      filter = input?.toUpperCase();
      tr = table?.getElementsByTagName("tr");
      for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for(j=1; j < td.length; j++){
          if (td[j]) {
            txtValue = td[j].textContent || td[j].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              flag = true;
              break;
            } else {
              flag = false;
            }
          }
        }

        if (flag == true) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        } 
      }
    }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){ 
    var instances = M.Modal.init(this.add_brand.nativeElement);
  }

  checks = false;

  checkAll(e:any) {
    if(e.target.checked == true){
      this.checks = true;
    }else{
      this.checks = false;
    }
  }

}
