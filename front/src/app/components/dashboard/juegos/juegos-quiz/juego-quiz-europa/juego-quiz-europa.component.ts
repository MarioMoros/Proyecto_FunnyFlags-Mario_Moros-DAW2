import { Component } from '@angular/core';
import Timer from 'easytimer.js';
import { CountrydataService } from 'src/app/services/countrydata.service';
import * as $ from 'jquery';
import { Juego } from '../../juego.model';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-juego-quiz-europa',
  templateUrl: './juego-quiz-europa.component.html',
  styleUrls: ['./juego-quiz-europa.component.css']
})
export class JuegoQuizEuropaComponent {
  pregunta:any = '';
  numeros_preguntas:any = [];

  loading = false;
  fin = false;

  json = [];

  timer = new Timer();
  tiempo_string = '';
  puntuacion = 100;

  datos:any;
  idUsuario:any;

  constructor(private countrydata: CountrydataService, private userdata: UserdataService){}


  ngOnInit(){
    this.idUsuario = localStorage.getItem('userId');
    this.timer.start({precision: 'secondTenths'});

    this.timer.addEventListener('secondTenthsUpdated', (e:any) => {
      $('#secondTenthsExample .values').html(this.timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']));
    });


    this.question();
  }

  question(){
    if(this.numeros_preguntas.length != 5){
      let id_random = Math.round(Math.random()*10+1);
      while(this.numeros_preguntas.includes(id_random)){
        id_random = Math.round(Math.random()*10+1);
      }
      this.numeros_preguntas.push(id_random);

      this.loading = true;
      this.countrydata.getQuestion(id_random).subscribe((response: any) =>{
        this.json = response;
        this.loading = false;
        this.pregunta = '<div>'+response[0]+' '+response[1]+'?</div>';

        let num_correcta = Math.round(Math.random()*3+1);

        let respuesta1 = document.getElementById("respuesta1");
        let respuesta2 = document.getElementById("respuesta2");
        let respuesta3 = document.getElementById("respuesta3");
        let respuesta4 = document.getElementById("respuesta4");

        respuesta1!.innerHTML = '';
        respuesta2!.innerHTML = '';
        respuesta3!.innerHTML = '';
        respuesta4!.innerHTML = '';

        if(id_random == 10){
          switch(num_correcta){
            case 1:
              respuesta1!.innerHTML = "<img src='"+response[2]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta2!.innerHTML = "<img src='"+response[3]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta3!.innerHTML = "<img src='"+response[4]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta4!.innerHTML = "<img src='"+response[5]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              break;
            case 2:
              respuesta1!.innerHTML = "<img src='"+response[3]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta2!.innerHTML = "<img src='"+response[2]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta3!.innerHTML = "<img src='"+response[4]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta4!.innerHTML = "<img src='"+response[5]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              break;
            case 3:
              respuesta1!.innerHTML = "<img src='"+response[4]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta2!.innerHTML = "<img src='"+response[3]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta3!.innerHTML = "<img src='"+response[2]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta4!.innerHTML = "<img src='"+response[5]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              break;
            case 4:
              respuesta1!.innerHTML = "<img src='"+response[5]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta2!.innerHTML = "<img src='"+response[3]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta3!.innerHTML = "<img src='"+response[4]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              respuesta4!.innerHTML = "<img src='"+response[2]+"' style='width: 100%; max-height: 100%; border: solid 1px black; border-radius: 10px'>";
              break;
          }
        }else{
          switch(num_correcta){
            case 1:
              respuesta1?.appendChild(document.createTextNode(response[2]));
              respuesta2?.appendChild(document.createTextNode(response[3]));
              respuesta3?.appendChild(document.createTextNode(response[4]));
              respuesta4?.appendChild(document.createTextNode(response[5]));
              break;
            case 2:
              respuesta1?.appendChild(document.createTextNode(response[3]));
              respuesta2?.appendChild(document.createTextNode(response[2]));
              respuesta3?.appendChild(document.createTextNode(response[4]));
              respuesta4?.appendChild(document.createTextNode(response[5]));
              break;
            case 3:
              respuesta1?.appendChild(document.createTextNode(response[4]));
              respuesta2?.appendChild(document.createTextNode(response[3]));
              respuesta3?.appendChild(document.createTextNode(response[2]));
              respuesta4?.appendChild(document.createTextNode(response[5]));
              break;
            case 4:
              respuesta1?.appendChild(document.createTextNode(response[5]));
              respuesta2?.appendChild(document.createTextNode(response[3]));
              respuesta3?.appendChild(document.createTextNode(response[4]));
              respuesta4?.appendChild(document.createTextNode(response[2]));
              break;
          }
        }
      });

    }else{
      this.fin = true;
      this.timer.pause();
      this.tiempo_string = this.timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']);
      this.updateRanking();
    }

  }

  comprobar(text:string){
    let dato;
    let op = document.getElementById(text)?.children;
    if(op!.length > 0){
      dato = op![0].getAttribute('src');
    }else{
      dato = document.getElementById(text)?.innerHTML;
    }

    if(dato != this.json[2]){
      this.puntuacion -= 20;
    }

    this.question();
  }

  updateRanking(){
    this.datos = new Juego(parseInt(this.idUsuario),'quiz_europa',this.puntuacion,this.tiempo_string);
    this.userdata.updateRanking(this.datos).subscribe((response: any) =>{
    });
  }

  salir(){
    this.timer.stop();
    history.back();
  }
}
