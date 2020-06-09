import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store.service';

@Component({
  selector: 'app-view-placed-order',
  templateUrl: './view-placed-order.component.html',
  styleUrls: ['./view-placed-order.component.css']
})
export class ViewPlacedOrderComponent implements OnInit {

  placedOrderArray:[];
  constructor(private storeService:StoreService) {
    this.getOrderPlaced();
  }

  getOrderPlaced() {
    this.storeService.getPlacedOrder().subscribe((data) => {
      console.log(data.orderedList);
      this.placedOrderArray = data.orderedList;
    });
  }

  ngOnInit() {
  }

}
