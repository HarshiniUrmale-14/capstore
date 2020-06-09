import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store.service';
import { Merchant } from '../merchant';

@Component({
  selector: 'app-view-merchant-list',
  templateUrl: './view-merchant-list.component.html',
  styleUrls: ['./view-merchant-list.component.css']
})
export class ViewMerchantListComponent implements OnInit {

  merchantListArray: [];
  merchantDelete:any;
  delete:any;
 

  constructor(private storeService:StoreService) {
    this.getMerchantList();
  }

  getMerchantList() {
    this.storeService.getMerchantList().subscribe((data) => {
      console.log(data.permanentMerchantList);
      this.merchantListArray = data.permanentMerchantList;
    });
  }


  deleteMerchant(merchantList: Merchant) {
    this.storeService.deleteMerchant(merchantList).subscribe(response => {
   console.log(response.descrpition);
      this.delete=response;
      this.merchantDelete  = response;
      this.getMerchantList();
    },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
