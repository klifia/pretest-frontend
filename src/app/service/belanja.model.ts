import { Produk } from "./produk.model";

export class Belanja{
    id: number;
    id_produk: number;
    nama_barang: string;
    qty: number;
    harga: string;

    constructor(id: number, produk: Produk, qty = 1) {
        this.id = id;
        this.id_produk = produk.id_produk;
        this.nama_barang = produk.nama_barang;
        this.harga = produk.harga;
        this.qty = qty;
    }
}