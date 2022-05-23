import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private articulos: Array<any> = [
    {sku: 'A134', marca: 'Nike', modelo: 'Revolution'},
    {sku: 'A781', marca: 'New Balance', modelo: 'Clasic'},
    {sku: 'B143', marca: 'Adidas', modelo: 'Peace'},
  ]

  constructor() { }

  getArticulos(): Array<any> {
    return this.articulos;
  }

  addArticulo(articulo: any): void {
    this.articulos.push(articulo);
  }

}
