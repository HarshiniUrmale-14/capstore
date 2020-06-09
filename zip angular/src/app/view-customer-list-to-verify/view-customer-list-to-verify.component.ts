import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-view-customer-list-to-verify',
  templateUrl: './view-customer-list-to-verify.component.html',
  styleUrls: ['./view-customer-list-to-verify.component.css']
})
export class ViewCustomerListToVerifyComponent implements OnInit {

  customerListVerifyArray: [];
  customerVerify:[];
  clicked=false;

  constructor(private storeService:StoreService) {
    this.getCustomerList();
  }

  getCustomerList() {
    this.storeService.getCustomerListToVerify().subscribe((data) => {
      console.log(data.temporaryCustomerList);
      this.customerListVerifyArray = data.temporaryCustomerList;
    });
  }
  VerifyCustomerList(customerList: Customer) {
    console.log(customerList);
    this.storeService.VerifyCustomer(customerList).subscribe(response => {
      console.log(response);
      this.customerVerify  = response;
      this.getCustomerList();
    },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
