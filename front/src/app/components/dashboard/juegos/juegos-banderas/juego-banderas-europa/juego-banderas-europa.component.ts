import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountrydataService } from 'src/app/services/countrydata.service';

@Component({
  selector: 'app-juego-banderas-europa',
  templateUrl: './juego-banderas-europa.component.html',
  styleUrls: ['./juego-banderas-europa.component.css']
})
export class JuegoBanderasEuropaComponent {
  pregunta:any = '';
  pais:any = '';
  form: FormGroup;
  index:any = 0;
  json:any = [];
  puntuacion = 100;
  fin = false;


  constructor(private countrydata: CountrydataService, private fb: FormBuilder){
    this.form = this.fb.group({
      pais_formulario: ''
    });
  }

  ngAfterViewInit(){
    this.pedirBandera();
  }

  pedirBandera(){
    this.countrydata.pedirBanderas().subscribe((response: any) =>{
      //this.pregunta = '<img [src]="'+response[0].bandera+'" style="width: 100px"/>';

      this.json = response;
      this.pregunta = this.json[this.index].bandera;
      this.pais = this.json[this.index].nombre_pais;
    });
  }

  comprobar(){
    const pais_introducido = this.form.value.pais_formulario;

    if(this.pais.toLowerCase() == pais_introducido.toLowerCase()){
      this.form.setValue({
        pais_formulario: ''
      });
      this.index++;
      if(this.index != 10){
        this.pregunta = this.json[this.index].bandera;
        this.pais = this.json[this.index].nombre_pais;
      }else{
        this.fin = true;
      }
    }else{
      this.puntuacion = this.puntuacion - 10;
    }
  }
}
