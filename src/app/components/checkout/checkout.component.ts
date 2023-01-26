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
    this.dishList = 
      [
        {
            "_id": "63d24bc6ca3140aae2dd798a",
            "name": "2",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:42.197Z",
            "updatedAt": "2023-01-26T09:45:42.197Z",
            "__v": 0
        },
        {
            "_id": "63d24bc6ca3140aae2dd798c",
            "name": "3",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:42.630Z",
            "updatedAt": "2023-01-26T09:45:42.630Z",
            "__v": 0
        },
        {
            "_id": "63d24bc7ca3140aae2dd798e",
            "name": "1",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:43.209Z",
            "updatedAt": "2023-01-26T09:45:43.209Z",
            "__v": 0
        },
        {
            "_id": "63d24bc7ca3140aae2dd7990",
            "name": "2",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:43.749Z",
            "updatedAt": "2023-01-26T09:45:43.749Z",
            "__v": 0
        }
    ]

  }

  // indeksujemy po id czyli od 1-6, dlatego dishNames[0] to blank
  dishNames = [
    "blank",
    "Przystawki mix",
    "Makaron wege",
    "Indyk pieczony",
    "Deser mix",
    "Pizza",
    "Catering mix"
  ]
  dishPrices = [
    0,
    39,
    29,
    69,
    39,
    39,
    89
  ]


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
      this.dishList =       [
        {
            "_id": "63d24bc6ca3140aae2dd798a",
            "name": "2",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:42.197Z",
            "updatedAt": "2023-01-26T09:45:42.197Z",
            "__v": 0
        },
        {
            "_id": "63d24bc6ca3140aae2dd798c",
            "name": "3",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:42.630Z",
            "updatedAt": "2023-01-26T09:45:42.630Z",
            "__v": 0
        },
        {
            "_id": "63d24bc7ca3140aae2dd798e",
            "name": "1",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:43.209Z",
            "updatedAt": "2023-01-26T09:45:43.209Z",
            "__v": 0
        },
        {
            "_id": "63d24bc7ca3140aae2dd7990",
            "name": "2",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:43.749Z",
            "updatedAt": "2023-01-26T09:45:43.749Z",
            "__v": 0
        }
    ]
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
      this.dishList = [
        {
            "_id": "63d24bc6ca3140aae2dd798a",
            "name": "2",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:42.197Z",
            "updatedAt": "2023-01-26T09:45:42.197Z",
            "__v": 0
        },
        {
            "_id": "63d24bc6ca3140aae2dd798c",
            "name": "3",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:42.630Z",
            "updatedAt": "2023-01-26T09:45:42.630Z",
            "__v": 0
        },
        {
            "_id": "63d24bc7ca3140aae2dd798e",
            "name": "1",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:43.209Z",
            "updatedAt": "2023-01-26T09:45:43.209Z",
            "__v": 0
        },
        {
            "_id": "63d24bc7ca3140aae2dd7990",
            "name": "2",
            "amount": 1,
            "createdAt": "2023-01-26T09:45:43.749Z",
            "updatedAt": "2023-01-26T09:45:43.749Z",
            "__v": 0
        }
    ]
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
    this.dishList =   [
      {
          "_id": "63d24bc6ca3140aae2dd798a",
          "name": "2",
          "amount": 1,
          "createdAt": "2023-01-26T09:45:42.197Z",
          "updatedAt": "2023-01-26T09:45:42.197Z",
          "__v": 0
      },
      {
          "_id": "63d24bc6ca3140aae2dd798c",
          "name": "3",
          "amount": 1,
          "createdAt": "2023-01-26T09:45:42.630Z",
          "updatedAt": "2023-01-26T09:45:42.630Z",
          "__v": 0
      },
      {
          "_id": "63d24bc7ca3140aae2dd798e",
          "name": "1",
          "amount": 1,
          "createdAt": "2023-01-26T09:45:43.209Z",
          "updatedAt": "2023-01-26T09:45:43.209Z",
          "__v": 0
      },
      {
          "_id": "63d24bc7ca3140aae2dd7990",
          "name": "2",
          "amount": 1,
          "createdAt": "2023-01-26T09:45:43.749Z",
          "updatedAt": "2023-01-26T09:45:43.749Z",
          "__v": 0
      }
  ]
  }
}
