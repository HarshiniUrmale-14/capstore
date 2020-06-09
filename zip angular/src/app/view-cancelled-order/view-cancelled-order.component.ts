import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store.service';

@Component({
  selector: 'app-view-cancelled-order',
  templateUrl: './view-cancelled-order.component.html',
  styleUrls: ['./view-cancelled-order.component.css']
})
export class ViewCancelledOrderComponent implements OnInit {

  cancelledOrderArray: [];
  constructor(private storeService:StoreService) {
    this.getCancelledList();
  }

  getCancelledList() {
    this.storeService.getCancelledOrder().subscribe((data) => {
      console.log(data.orderStatusList);
      this.cancelledOrderArray = data.orderStatusList;
    });
  }

  ngOnInit() {
  }

}
