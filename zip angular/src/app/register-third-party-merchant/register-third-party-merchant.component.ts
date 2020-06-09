import { Component, OnInit } from '@angular/core';
import { StoreService } from 'store.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-third-party-merchant',
  templateUrl: './register-third-party-merchant.component.html',
  styleUrls: ['./register-third-party-merchant.component.css']
})
export class RegisterThirdPartyMerchantComponent implements OnInit {
  notValid: any;
  valid: any;
  constructor(private storeService: StoreService) { }

  submit(addForm: NgForm) {
    console.log(addForm.value);
    this.storeService.addMerchant(addForm.value).subscribe(response => {
      if (response.statusCode === 201) {
        this.notValid = null;
        this.valid = response.description;
        addForm.reset();
      } else {
        this.notValid = response.description;
      }
    },
      err => {
        console.log(err);
      }

    );
  }


  ngOnInit() {
  }

}
