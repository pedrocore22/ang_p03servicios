import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  @ViewChild('sku') skuInputRef: ElementRef = new ElementRef({});

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      sku: new FormControl('', [Validators.required, Validators.minLength(4)]),
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required])
    })
  }

  ngAfterViewInit() {
    this.skuInputRef.nativeElement.focus();
  }

  addArticulo() {
    // Invocar cuando se dispare el evento submit
    this.articulosService.addArticulo(this.form.value);
    this.form.reset();
    this.skuInputRef.nativeElement.focus();
  }

}
