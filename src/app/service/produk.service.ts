import { Injectable } from '@angular/core';
import { Produk } from './produk.model';

@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  produk : Produk[]= [
    new Produk(1, 'MacBook Pro', 'Laptop', '1500000', 'spesifikasi teknis Tinggi: 1,56cm; Panjang: 30.41 cm; Lebar: 21,24cm; Berat: 1,38kg', 'https://i.pinimg.com/236x/ad/9d/ad/ad9dad6e5d5542eafd9deb2bdbda74a5.jpg'),
    new Produk(2, 'Samsung Galaxy S23 Ultra 5G', 'SmartPhone', '2000000', 'spesifikasi teknis camera 12MP Ultra-Wide Camera; 200MP Wide-angle Camera 10MP Telephoto Camera 1 dengan 10x Optical Zoom 10MP; Telephoto Camera 2 dengan 3x Optical Zoom', 'https://p-id.ipricegroup.com/uploaded_cff1d15e3da82b08bc6556482461ac093e1fbbd1.jpg'),
    new Produk(3, 'Infinix Hot 20i', 'SmartPhone', '8300000', 'spesifikasi teknis Layar 6.82; Kamera Utama 13MP', 'https://p-id.ipricegroup.com/uploaded_223200e9d0ec38832aeadd793b348edf65142077.jpg'),
    new Produk(4, 'Lenovo IdeaPad Slim 3', 'Laptop', '8300000', 'spesifikasi teknis Layar 14; Processor Intel Coer i3-10110U', 'https://p-id.ipricegroup.com/uploaded_62d201d223d16b998fbb48aea6fd1999.jpg'),
    new Produk(5, 'Dell Latitude 3410', 'Laptop', '29000000', 'spesifikasi teknis Layar 14', 'https://p-id.ipricegroup.com/uploaded_0e90671443273cd1fb88c433d5227463.jpg'),
    new Produk(6, 'Asus Laptop X441BA', 'Laptop', '11000000', 'spesifikasi teknis Layar 14', 'https://p-id.ipricegroup.com/uploaded_164faaf28eefbce38032f8eb7c0ce26b.jpg'),
  ]

  constructor() { }

  getProduk(): Produk[] {
    return this.produk
  }
}
