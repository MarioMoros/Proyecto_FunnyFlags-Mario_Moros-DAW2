import { Component } from '@angular/core';
import { CountrydataService } from 'src/app/services/countrydata.service';

@Component({
  selector: 'app-juegos-quiz',
  templateUrl: './juegos-quiz.component.html',
  styleUrls: ['./juegos-quiz.component.css']
})
export class JuegosQuizComponent {

  pregunta:any = '';
  respuesta:any = '';
  id_random = Math.round(Math.random()*10+1);

  constructor(private countrydata: CountrydataService){}


  ngAfterViewInit(){
    this.question();
  }

  question(){
    this.countrydata.getQuestion(this.id_random).subscribe((response: any) =>{

      console.log(response);
      this.pregunta = '<div>'+response[0]+' '+response[1]+'?</div>';

      for (let index = 2; index < 6; index++) {
        this.respuesta += '<button>'+response[index]+'</button><br>';
      }
    });

  }
}
