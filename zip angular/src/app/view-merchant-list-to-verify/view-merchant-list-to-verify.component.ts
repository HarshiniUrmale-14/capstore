import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store.service';
import { Merchant } from '../merchant';
import { Customer } from '../customer';

@Component({
  selector: 'app-view-merchant-list-to-verify',
  templateUrl: './view-merchant-list-to-verify.component.html',
  styleUrls: ['./view-merchant-list-to-verify.component.css']
})
export class ViewMerchantListToVerifyComponent implements OnInit {

  merchantListVerifyArray: [];
  merchantVerify:any;
  clicked=false;

  constructor(private storeService:StoreService) {
    this.getMerchantList();
  }
 
  getMerchantList() {
    this.storeService.getMerchantListToVerify().subscribe((data) => {
      console.log(data.temporaryMerchantList);
      this.merchantListVerifyArray = data.temporaryMerchantList;
    });
  }
  VerifyMerchantList(merchantList: Merchant) {
    console.log(merchantList);
    this.storeService.VerifyMerchant(merchantList).subscribe(response => {
      console.log(response);
      this.merchantVerify  = response;
      this.getMerchantList();
    },
      err => {
        console.log(err);
      });
  }

  
  ngOnInit() {
  }

}
