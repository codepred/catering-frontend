import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent {
  /*
  const dishList: any[] = [];

  dishList.push({"id": 1, "name": "Przystawki mix", "number": "1"})
  dishList.push({"id": 2, "name": "Makaron wege", "number": "1"})
  dishList.push({"id": 3, "name": "Indyk pieczony", "number": "1"})
  dishList.push({"id": 4, "name": "Deser mix", "number": "1"})
  dishList.push({"id": 5, "name": "Pizza", "number": "1"})
  dishList.push({"id": 6, "name": "Catering mix", "number": "1"})

  
  ngOnInit(): void {
    // load data
  }


  changeNumber({itemId, action }: { itemId: any; action: any }){
    if (action === 'minus') {
      //pass
    }
    if (action === 'plus') {
      //pass
    }
  }
  
  clearCart() {
    
  }
  */
}
