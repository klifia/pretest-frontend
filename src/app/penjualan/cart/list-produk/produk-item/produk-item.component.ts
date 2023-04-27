import { Component, Input, OnInit } from '@angular/core';
import { BelanjaService } from 'src/app/service/belanja.service';
import { Produk } from 'src/app/service/produk.model';
import { TambahBelanjaService } from 'src/app/service/tambah-belanja.service';

@Component({
  selector: 'app-produk-item',
  templateUrl: './produk-item.component.html',
  styleUrls: ['./produk-item.component.css']
})
export class ProdukItemComponent implements OnInit {

  @Input() produkItem: Produk

  constructor(
    private tambah: TambahBelanjaService,
    private belanjaService: BelanjaService
  ) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.tambah.sendTambah(this.produkItem)
  }
}
