import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrydataService {

  constructor(private httpRequest: HttpClient) { }

  getAllCountryData(){
    return this.httpRequest.get('http://localhost:8000/api/getAllCountryData');
  }

  getQuestion(id_question:any){
    return this.httpRequest.get('http://localhost:8000/api/getQuestion/'+id_question);
  }

  pedirBanderas(){
    return this.httpRequest.get('http://localhost:8000/api/pedirBanderas');
  }

  pedirPaises(){
    return this.httpRequest.get('http://localhost:8000/api/pedirPaises');
  }
}
