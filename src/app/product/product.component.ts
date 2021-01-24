import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dato = 1;

  clickFunction(numero: number) {

  	this.dato = numero;
    console.log(this.dato);

  }

}
