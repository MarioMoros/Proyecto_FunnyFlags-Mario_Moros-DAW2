import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  displayedColumns: string[] = ['name', 'nombre_juego', 'puntuacion', 'tiempo'];
  dataSourceBanderas:any;
  dataSourceMapas:any;
  dataSourceQuiz:any;


  loading = false;
  arrayMapas = [];
  arrayBanderas = [];
  arrayQuiz = [];
  json = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
          case "mapa_europa":
            this.arrayMapas.push(this.json[index]);
            break;
          case "quiz_europa":
            this.arrayQuiz.push(this.json[index]);
            break;
        }
      }
      this.loading = false;

      this.dataSourceBanderas = new MatTableDataSource(this.arrayBanderas);
      this.dataSourceMapas = new MatTableDataSource(this.arrayMapas);
      this.dataSourceQuiz = new MatTableDataSource(this.arrayQuiz);

      this.dataSourceBanderas.paginator = this.paginator;
      this.dataSourceMapas.paginator = this.paginator;
      this.dataSourceQuiz.paginator = this.paginator;
    });
  }

  applyFilterBanderas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceBanderas.filter = filterValue.trim().toLowerCase();
  }
  applyFilterMapas(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMapas.filter = filterValue.trim().toLowerCase();
  }
  applyFilterQuiz(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceQuiz.filter = filterValue.trim().toLowerCase();
  }
}
