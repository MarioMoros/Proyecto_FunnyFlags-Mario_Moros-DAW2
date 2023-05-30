import { Component } from '@angular/core';
import Timer from 'easytimer.js';
import { CountrydataService } from 'src/app/services/countrydata.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-juego-quiz-europa',
  templateUrl: './juego-quiz-europa.component.html',
  styleUrls: ['./juego-quiz-europa.component.css']
})
export class JuegoQuizEuropaComponent {
  pregunta:any = '';

  id_random = Math.round(Math.random()*10+1);
  loading = false;

  num_correcta = Math.round(Math.random()*3+1);


  timer = new Timer();
  tiempo_string = '';
  puntuacion = 100;

  constructor(private countrydata: CountrydataService){}


  ngOnInit(){
    this.timer.start({precision: 'secondTenths'});

    this.timer.addEventListener('secondTenthsUpdated', (e:any) => {
      $('#secondTenthsExample .values').html(this.timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']));
    });


    this.question();
  }

  question(){
    this.loading = true;
    this.countrydata.getQuestion(this.id_random).subscribe((response: any) =>{
      this.loading = false;
      this.pregunta = '<div>'+response[0]+' '+response[1]+'?</div>';

      let respuesta1 = document.getElementById("respuesta1");
      let respuesta2 = document.getElementById("respuesta2");
      let respuesta3 = document.getElementById("respuesta3");
      let respuesta4 = document.getElementById("respuesta4");

      console.log(this.num_correcta);

      if(this.id_random == 10){
        switch(this.num_correcta){
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
        switch(this.num_correcta){
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
  }

  comprobar(){

  }
}
