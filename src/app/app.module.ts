import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './penjualan/shared/header/header.component';
import { FooterComponent } from './penjualan/shared/footer/footer.component';
import { NavComponent } from './penjualan/shared/nav/nav.component';
import { CartComponent } from './penjualan/cart/cart.component';
import { BelanjaComponent } from './penjualan/cart/belanja/belanja.component';
import { ListProdukComponent } from './penjualan/cart/list-produk/list-produk.component';
import { ItemBelanjaComponent } from './penjualan/cart/belanja/item-belanja/item-belanja.component';
import { ProdukItemComponent } from './penjualan/cart/list-produk/produk-item/produk-item.component';
import { DetailProdukComponent } from './penjualan/cart/list-produk/detail-produk/detail-produk.component';
import { CheckoutComponent } from './penjualan/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CartComponent,
    BelanjaComponent,
    ListProdukComponent,
    ItemBelanjaComponent,
    ProdukItemComponent,
    DetailProdukComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
