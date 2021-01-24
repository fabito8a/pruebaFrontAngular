import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = 1;
  valor = 295.95;

  clickFunction(num: number) {

  	this.data = num;
    console.log(this.data);

  }

  clickValor(value: number){
    this.valor = 295.95 + 75;
    console.log(this.valor);
  }

  clickValor2(value: number){
    this.valor = 370.95 + 25;
    console.log(this.valor);
  }

}
