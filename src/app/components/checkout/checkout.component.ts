import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CommonModule } from '@angular/common'


@Component({
  standalone: true,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less'],
  imports : [CommonModule]
})

export class CheckoutComponent {

  dishList: any = [];


  constructor(private crudService: CrudService) { }

  
  ngOnInit(): void {
    // load data
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.dishList =res;
      console.log(this.dishList)
    });    


  }


  changeNumber(id:any, action:string, amount:number){
    if (action === 'minus') {
      this.crudService.updateBook(id,action,amount).subscribe(res => {
        console.log(res)
        this.crudService.GetBooks().subscribe(res => {
          console.log(res)
          this.dishList =res;
          console.log(this.dishList)
        });    
      })
    }
    if (action === 'plus') {
      this.crudService.updateBook(id,action,amount).subscribe(res => {
        console.log(res)
        this.crudService.GetBooks().subscribe(res => {
          console.log(res)
          this.dishList =res;
          console.log(this.dishList)
        });    
      })
    }
  }
  
  clearCart() {
    this.crudService.DeleteAll().subscribe(
      res => {
        console.log('all deleted')
        this.crudService.GetBooks().subscribe(res => {
          console.log(res)
          this.dishList =res;
          console.log(this.dishList)
        });    
      }
    )
  }
}
