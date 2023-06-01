import { Component } from '@angular/core';
import { Juego } from '../../juego.model';
import { UserdataService } from 'src/app/services/userdata.service';
import { CountrydataService } from 'src/app/services/countrydata.service';

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_europeHigh from "@amcharts/amcharts5-geodata/region/world/europeHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_lang_ES from "@amcharts/amcharts5-geodata/lang/ES01";

import Timer from 'easytimer.js';
import * as $ from 'jquery';


@Component({
  selector: 'app-juego-mapa-europa',
  templateUrl: './juego-mapa-europa.component.html',
  styleUrls: ['./juego-mapa-europa.component.css']
})
export class JuegoMapaEuropaComponent {
  json:any = [];
  pais:any = '';
  index:any = 0;
  polygonSeries:any;
  puntuacion = 100;

  start = false;

  fin = false;
  datos:any;
  idUsuario:any;

  timer = new Timer();
  tiempo_string = '';

  constructor(private countrydata: CountrydataService, private userdata: UserdataService){}

  ngAfterViewInit(){

    this.idUsuario = localStorage.getItem('userId');

    let root = am5.Root.new("chartdiv");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "none",
      panY: "none",
      projection: am5map.geoNaturalEarth1()
    }));

    this.polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_europeHigh,
      geodataNames: am5geodata_lang_ES,
    }));

    this.polygonSeries.mapPolygons.template.setAll({
      toggleKey: "active",
      interactive: true
    });


    this.polygonSeries.mapPolygons.template.events.on("click", (ev:any) =>{
      var pais_pulsado = ev.target.dataItem.dataContext.name;
      if(this.pais == pais_pulsado){
        ev.target.states.applyAnimate('bien');
        setTimeout(()=>{
          ev.target.states.applyAnimate('bien');
        });
        this.index++;
        if(this.index != this.json.length){//Poner this.json.length
          this.pais = this.json[this.index].nombre_pais;
        }else{
          this.finalizar();
        }
      }else{
        ev.target.states.applyAnimate('mal');
        setTimeout(()=>{
          ev.target.states.applyAnimate('mal');
        });

        setTimeout(()=>{
          ev.target.states.applyAnimate('volver');
        }, 1000);

        this.puntuacion -= 10;

        if(this.puntuacion == 0){
          this.finalizar();
        }
      }
    });

    this.polygonSeries.mapPolygons.template.states.create("bien", {
      fill: am5.color("#00FF00"),
      interactive: false
    });

    this.polygonSeries.mapPolygons.template.states.create("mal", {
      fill: am5.color("#FF0000")
    });

    this.polygonSeries.mapPolygons.template.states.create("volver", {
      fill: am5.color(0x6794dc)
    });




    // Make stuff animate on load
    chart.appear(3000, 100);

  }

  finalizar(){
    this.fin = true;
    this.timer.pause();
    this.tiempo_string = this.timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']);
    this.updateRanking();
  }

  salir(){
    this.timer.stop();
    history.back();
  }

  empezar(){
    this.pedirPaises();
    this.start = true;
    this.timer.start({precision: 'secondTenths'});

    this.timer.addEventListener('secondTenthsUpdated', (e:any) => {
      $('#secondTenthsExample .values').html(this.timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']));
    });
  }

  updateRanking(){
    this.datos = new Juego(parseInt(this.idUsuario),'mapa_europa',this.puntuacion,this.tiempo_string);
    this.userdata.updateRanking(this.datos).subscribe((response: any) =>{
    });
  }

  pedirPaises(){
    this.countrydata.pedirPaises().subscribe((response: any) =>{
      this.json = response;
      this.pais = this.json[this.index].nombre_pais;
    });
  }

}
