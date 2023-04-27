import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TambahBelanjaService {

  subject = new Subject()

  constructor() { }

  sendTambah(produk) {
    this.subject.next(produk)
  }

  getTambah() {
    return this.subject.asObservable()
  }
}
