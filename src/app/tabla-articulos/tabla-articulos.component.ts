import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-tabla-articulos',
  templateUrl: './tabla-articulos.component.html',
  styleUrls: ['./tabla-articulos.component.css']
})
export class TablaArticulosComponent implements OnInit {

  articulos: Array<any> = [];

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.articulos = this.articulosService.getArticulos();
    console.log(this.articulos);
  }

}
