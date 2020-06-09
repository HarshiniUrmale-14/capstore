import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCustomerListComponent } from './view-customer-list/view-customer-list.component';
import { ViewMerchantListComponent } from './view-merchant-list/view-merchant-list.component';
import { ViewMerchantListToVerifyComponent } from './view-merchant-list-to-verify/view-merchant-list-to-verify.component';
import { ViewCustomerListToVerifyComponent } from './view-customer-list-to-verify/view-customer-list-to-verify.component';
import { ViewCommonFeedbackComponent } from './view-common-feedback/view-common-feedback.component';
import { ViewPlacedOrderComponent } from './view-placed-order/view-placed-order.component';
import { ViewCancelledOrderComponent } from './view-cancelled-order/view-cancelled-order.component';
import { RegisterThirdPartyMerchantComponent } from './register-third-party-merchant/register-third-party-merchant.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewCustomerListComponent,
    ViewMerchantListComponent,
    ViewMerchantListToVerifyComponent,
    ViewCustomerListToVerifyComponent,
    ViewCommonFeedbackComponent,
    ViewPlacedOrderComponent,
    ViewCancelledOrderComponent,
    RegisterThirdPartyMerchantComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
