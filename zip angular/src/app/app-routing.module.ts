import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCancelledOrderComponent } from './view-cancelled-order/view-cancelled-order.component';
import { RegisterThirdPartyMerchantComponent } from './register-third-party-merchant/register-third-party-merchant.component';
import { ViewCommonFeedbackComponent } from './view-common-feedback/view-common-feedback.component';
import { ViewCustomerListComponent } from './view-customer-list/view-customer-list.component';
import { ViewCustomerListToVerifyComponent } from './view-customer-list-to-verify/view-customer-list-to-verify.component';
import { ViewMerchantListComponent } from './view-merchant-list/view-merchant-list.component';
import { ViewPlacedOrderComponent } from './view-placed-order/view-placed-order.component';
import { ViewMerchantListToVerifyComponent } from './view-merchant-list-to-verify/view-merchant-list-to-verify.component';


const routes: Routes = [
  { path: 'cancelledOrder', component: ViewCancelledOrderComponent },
  { path: 'registerThirdParty', component: RegisterThirdPartyMerchantComponent },
  { path: 'commonFeedback', component: ViewCommonFeedbackComponent },
  { path: 'CustomerList', component:  ViewCustomerListComponent },
  { path: 'customerListVerify', component:  ViewCustomerListToVerifyComponent },
  { path: 'merchantList', component: ViewMerchantListComponent},
  { path: 'merchantListVerify', component: ViewMerchantListToVerifyComponent},
  { path: 'placedOrderList', component: ViewPlacedOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
