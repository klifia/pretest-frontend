import { Component, OnInit } from '@angular/core';
import { Produk } from 'src/app/service/produk.model';
import { ProdukService } from 'src/app/service/produk.service';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.component.html',
  styleUrls: ['./list-produk.component.css']
})
export class ListProdukComponent implements OnInit {

  produkList: Produk[] = []

  constructor(
    private produkService : ProdukService
  ) { }

  ngOnInit(): void {
   this.produkList = this.produkService.getProduk()
  }

}
