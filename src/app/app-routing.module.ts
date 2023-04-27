import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProdukComponent } from './penjualan/cart/list-produk/detail-produk/detail-produk.component';
import { CheckoutComponent } from './penjualan/checkout/checkout.component';


const routes: Routes = [
  {
    path: 'checkout', 
    component: CheckoutComponent
  },
  {
    path: 'detail',
    component: DetailProdukComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
