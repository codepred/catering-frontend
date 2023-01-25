import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CateringComponent } from './components/catering/catering.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'catering', component: CateringComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
