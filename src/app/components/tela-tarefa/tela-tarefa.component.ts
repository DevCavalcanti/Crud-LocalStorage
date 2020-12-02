import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-tela-tarefa',
  templateUrl: './tela-tarefa.component.html',
  styleUrls: ['./tela-tarefa.component.css']

})
export class TelaTarefaComponent implements OnInit {

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

 Buscar:any;

 MinhaValue:any;

 consultar:any;



  constructor() {}




  ngOnInit(): void {


    Object.keys(localStorage).forEach(function(Id_){
      const Resultado = (localStorage.getItem(Id_));

     // console.log(Resultado);




  });



}

deletar(){

  var index = 'Id_'+ this.consultar;

    const cat = localStorage.removeItem(index);


}

alterar(){


  this.C = this.A + this.valores.Nome;
  this.D = this.B + this.valores.MyNota;

      
      const nome = this.C;
      const nota = this.D;
     
      var NovoValor = nome + '/' + nota;




  var index = 'Id_'+ this.consultar;

    const cat = localStorage.setItem(index, NovoValor);

       //localStorage.setItem()
      //localStorage.setItem('alterar');

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

  }

  buscar(){


    Object.keys(localStorage).forEach(function(Id_){
      const Resultado = (localStorage.getItem(Id_));
      console.log(Resultado);

   });




  }

  funcao(){

    alert("Para consular a lista de candidatos cadastrados, acesse o console e precione o botão ( Consular )")


var index = 'Id_'+ this.consultar;

    const cat = localStorage.getItem(index);
    alert(cat)


  }

  limpar(){

    this.valores.Nome = '';
   this.valores.MyNota = '';
   this.consultar = '';
    
  }

}




