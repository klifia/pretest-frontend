import { Component, Input, OnInit } from '@angular/core';
import { Produk } from 'src/app/service/produk.model';
import { TambahBelanjaService } from 'src/app/service/tambah-belanja.service';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.component.html',
  styleUrls: ['./detail-produk.component.css']
})
export class DetailProdukComponent implements OnInit {

  @Input() produkItem: Produk

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
