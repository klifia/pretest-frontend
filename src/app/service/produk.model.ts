export class Produk{
    id_produk: number;
    nama_barang: string;
    jenis_barang: string;
    harga: string;
    deskripsi: string;
    imageUrl: string;

    constructor(id_produk, nama_barang, jenis_barang = '', harga = '', deskripsi = '', imageUrl = '') {
        this.id_produk = id_produk,
        this.nama_barang = nama_barang,
        this.jenis_barang = jenis_barang,
        this.harga = harga,
        this.deskripsi = deskripsi,
        this.imageUrl = imageUrl
       }
}