import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  valores: any = ['Nome', 'MyNota'];

  A: any = 'Nome: ';
  B: any = ' Nota: ';
  C: any;
  D: any;

  ficha:any;
  Cont:any;

Resultado: any ;

 resposta:any;

 Postar:any;
  constructor() {}




  ngOnInit(): void {



    Object.keys(localStorage).forEach(function(Id_){
      const Resultado = (localStorage.getItem(Id_));
      console.log(Resultado);

   });
   this.Postar = this.Resultado;




  }

  adicionar() {
    this.C = this.A + this.valores.Nome;
    this.D = this.B + this.valores.MyNota;

    if (typeof Storage !== 'undefined') {
      if (localStorage.cont) {
        localStorage.cont = Number(localStorage.cont) + 1;
      } else {
        localStorage.cont = 1;
      }

      const nome = this.C;
      const nota = this.D;
      localStorage.setItem('Id_' + localStorage.cont, nome + ' / ' + nota);
    }

    var pessoaAntiga = localStorage.getItem("Id_") || ''.split(",");
    console.log(pessoaAntiga);


  }

  Buscar() {





    /*
    var ficha:any;

    for (let Id in localStorage) {
      if (!localStorage.hasOwnProperty(Id)) {
        continue; // skip keys like "setItem", "getItem" etc
      }
      ficha = (`${Id}: ${localStorage.getItem(Id)}`);
    }*/


  }


}
