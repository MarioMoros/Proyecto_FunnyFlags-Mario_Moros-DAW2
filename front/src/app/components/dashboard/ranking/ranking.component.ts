import { Component } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  displayedColumns: string[] = ['name', 'nombre_juego', 'puntuacion', 'tiempo'];
  dataSourceBanderas = [];
  dataSourceMapas = [];
  dataSourceQuiz = [];


  loading = false;
  arrayMapas = [];
  arrayBanderas = [];
  arrayQuiz = [];
  json = [];

  constructor(private userdata: UserdataService){}

  ngOnInit(){
    this.showRanking();
  }

  showRanking(){
    this.loading = true;
    this.userdata.showRanking().subscribe((response: any) =>{
      this.json = response;
      for (let index = 0; index < this.json.length; index++) {
        switch(response[index].nombre_juego){
          case "banderas_europa":
            this.arrayBanderas.push(this.json[index]);
            break;
          case "mapas_europa":
            this.arrayMapas.push(this.json[index]);
            break;
          case "quiz_europa":
            this.arrayQuiz.push(this.json[index]);
            break;
        }
      }
      this.loading = false;

      this.dataSourceBanderas = this.arrayBanderas;
      this.dataSourceMapas = this.arrayMapas;
      this.dataSourceQuiz = this.arrayQuiz;
    });
  }
}
