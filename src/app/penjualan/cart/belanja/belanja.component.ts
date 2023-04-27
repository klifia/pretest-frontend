import { Component, OnInit } from '@angular/core';
import { Produk } from 'src/app/service/produk.model';
import { TambahBelanjaService } from 'src/app/service/tambah-belanja.service';

@Component({
  selector: 'app-belanja',
  templateUrl: './belanja.component.html',
  styleUrls: ['./belanja.component.css']
})
export class BelanjaComponent implements OnInit {

  itemBelanja = [
    // {id: 1, id_produk: 2, nama_produk: 'Samsung Galaxy S23 Ultra 5G', qty: 1, harga: 2000000},
    // {id: 2, id_produk: 3, nama_produk: 'Infinix Hot 20i', qty: 4, harga: 8300000},
    // {id: 3, id_produk: 5, nama_produk: 'Dell Latitude 3410', qty: 2, harga: 29000000},
    // {id: 4, id_produk: 1, nama_produk: 'MacBook Pro', qty: 2, harga: 1500000},
  ];

  totalBelanja = 0
  constructor(
    private tambah: TambahBelanjaService
  ) { }

  ngOnInit(): void {

    this.tambah.getTambah().subscribe((produk: Produk) => {
      this.addToCart(produk)
    })
  }

  addToCart(produk: Produk){

    let produkExists = false

    for(let i in this.itemBelanja) {
      if (this.itemBelanja[i].id_produk === produk.id_produk) {
        this.itemBelanja[i].qty++
        produkExists = true
        break;

      }
    }

    if (!produkExists) {
      this.itemBelanja.push({
      id_produk: produk.id_produk,
      nama_produk: produk.nama_barang,
      qty: 1,
      harga: produk.harga
    })
    }

    // if (this.itemBelanja.length === 0) {
    //   this.itemBelanja.push({
    //     id_produk: produk.id_produk,
    //     nama_produk: produk.nama_barang,
    //     qty: 1,
    //     harga: produk.harga
    //   })
    // } else {

    //   for(let i in this.itemBelanja) {
    //     if (this.itemBelanja[i].id_produk === produk.id_produk) {
    //       this.itemBelanja[i].qty++
  
    //     } else{
  
    //       this.itemBelanja.push({
    //         id_produk: produk.id_produk,
    //         nama_produk: produk.nama_barang,
    //         qty: 1,
    //         harga: produk.harga
    //       })
    //     } 
    //   }
    // }

    this.totalBelanja = 0
    this.itemBelanja.forEach(item => {
      this.totalBelanja += (item.qty * item.harga)
    })
  }
}
