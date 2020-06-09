import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store.service';

@Component({
  selector: 'app-view-customer-list',
  templateUrl: './view-customer-list.component.html',
  styleUrls: ['./view-customer-list.component.css']
})
export class ViewCustomerListComponent implements OnInit {

  customerListArray: [];

  constructor(private storeService:StoreService) {
    this.getCustomerList();
  }

  getCustomerList() {
    this.storeService.getCustomerList().subscribe((data) => {
      console.log(data.loginList);
      this.customerListArray = data.loginList;
    });
  }

  ngOnInit() {
  }

}
