import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
 

  api = 'http://localhost:8080/';


  constructor(private http: HttpClient, private router: Router) { }

  getPlacedOrder() {
    return this.http.get<any>(`${this.api}viewPlaceOrder`);
  }
  getCancelledOrder() {
    return this.http.get<any>(`${this.api}viewCancelledOrder`);
  }
  getFeedBack() {
    return this.http.get<any>(`${this.api}viewFeedback`);
  }
  getCustomerListToVerify() {
    return this.http.get<any>(`${this.api}ViewCustomerListToVerify`);
  }
  getMerchantListToVerify() {
    return this.http.get<any>(`${this.api}ViewMerchantListToVerify`);
  }
  getCustomerList() {
    return this.http.get<any>(`${this.api}viewVerifiedCustomer`);
  }
  getMerchantList() {
    return this.http.get<any>(`${this.api}viewVerifiedMerchant`);
  }
  deleteMerchant(data) {
    return this.http.delete<any>(`${this.api}deleteMerchant/${data.email}`);
  }
 
  VerifyCustomer(data) {
    return this.http.post<any>(`${this.api}customerVerification`,data);

  }
  VerifyMerchant(data) {
    return this.http.post<any>(`${this.api}merchantVerification`,data);

  }

  addMerchant(data) {
    return this.http.post<any>(`${this.api}register`, data);

  }

}
