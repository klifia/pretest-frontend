import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-belanja',
  templateUrl: './item-belanja.component.html',
  styleUrls: ['./item-belanja.component.css']
})
export class ItemBelanjaComponent implements OnInit {

  @Input() itemBelanja: any

  constructor() { }

  ngOnInit(): void {
  }

}
