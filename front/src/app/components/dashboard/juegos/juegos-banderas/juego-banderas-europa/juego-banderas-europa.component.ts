import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountrydataService } from 'src/app/services/countrydata.service';
import { Juego } from '../../juego.model';
import { UserdataService } from 'src/app/services/userdata.service';

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
  tiempo = '00:00:01';
  fin = false;

  datos:any;

  idUsuario:any;



  constructor(private countrydata: CountrydataService, private userdata: UserdataService, private fb: FormBuilder){
    this.form = this.fb.group({
      pais_formulario: ''
    });
  }

  ngAfterViewInit(){
    this.idUsuario = localStorage.getItem('userId');
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

    let introducido_bueno = this.eliminarDiacriticosEs(pais_introducido);
    let pais_bueno = this.eliminarDiacriticosEs(this.pais);

    if(pais_bueno.toLowerCase() == introducido_bueno.toLowerCase()){
      this.form.setValue({
        pais_formulario: ''
      });
      this.index++;
      if(this.index != this.json.length){
        this.pregunta = this.json[this.index].bandera;
        this.pais = this.json[this.index].nombre_pais;
      }else{
        this.fin = true;
        this.updateRanking();
      }
    }else{
      this.puntuacion = this.puntuacion - 10;
    }
  }

  eliminarDiacriticosEs(texto:String){
    return texto.normalize('NFD')
      .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
      .normalize();
  }

  updateRanking(){
    this.datos = new Juego(parseInt(this.idUsuario),'banderas_europa',this.puntuacion,'00:00:00');
    this.userdata.updateRanking(this.datos).subscribe((response: any) =>{

    });
  }
}
