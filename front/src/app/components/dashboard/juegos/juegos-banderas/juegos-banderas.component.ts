import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountrydataService } from 'src/app/services/countrydata.service';

@Component({
  selector: 'app-juegos-banderas',
  templateUrl: './juegos-banderas.component.html',
  styleUrls: ['./juegos-banderas.component.css']
})
export class JuegosBanderasComponent {

  pregunta:any = '';
  pais:any = '';
  form: FormGroup;
  index:any = 0;
  json:any = [];


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

    if(this.pais == pais_introducido){
      this.form.setValue({
        pais_formulario: ''
      });
      this.index++;
      this.pregunta = this.json[this.index].bandera;
      this.pais = this.json[this.index].nombre_pais;
    }else{
      console.log('mal');
    }
  }


}
