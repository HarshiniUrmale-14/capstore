import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store.service';

@Component({
  selector: 'app-view-common-feedback',
  templateUrl: './view-common-feedback.component.html',
  styleUrls: ['./view-common-feedback.component.css']
})
export class ViewCommonFeedbackComponent implements OnInit {
  feedbackArray: [];
  constructor(private storeService:StoreService) {
    this.getfeedbackList();
  }

  getfeedbackList() {
    this.storeService.getFeedBack().subscribe((data) => {
      console.log(data.list);
      this.feedbackArray = data.list;
    });
  }
  ngOnInit() {
  }

}
