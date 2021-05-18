import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  constructor() {}
    ngOnInit(){
       //Practica 1
      /*console.log("Hola mundo");
      let n1 = 5;
      let n2 = 10;
      debugger;
      let total = n1 + n2;
      console.log(total);*/

      //Practica 2
      /*console.log("El resultado es correcto");
      let n1 = 100;
      let n2 = 80;
      let n3 = 70;
      //debugger;
      let subtotal = n1 / n2;
      let total = subtotal * n3;
      console.log(total);*/

      //Practica 3
      /*console.log("Hola profesor");
      let n1 = 12;
      let n2 = 2;
      
      //debugger;
      let total = n1 * n2;
      console.log("El resultado es: " + total);*/

      //Practica 4
      console.log("Debugg in process...");
      var n1 = 8;
      for(var i = 1; i<=10; i++){
       
        let total = n1 * i;

        if(i==10){

          console.log("El resultado final es: " + total);
        }else{
          console.log("El resultado previo es: " + total);
        }

      }
      
    }
}
