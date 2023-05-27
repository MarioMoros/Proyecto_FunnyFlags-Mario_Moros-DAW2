import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  tokenVal:any = localStorage.getItem('token');

  constructor(private httpRequest: HttpClient) { }

  header = new HttpHeaders({
    'Authorization' : "Bearer" + this.tokenVal
  })


  getUserData(infoUser:any){
    return this.httpRequest.get('http://localhost:8000/api/infoUser/'+infoUser, {
      headers: this.header
    })
  }

  registerUser(data:any){
    return this.httpRequest.post('http://localhost:8000/api/register', data);
  }

  loginUser(data:any){
    return this.httpRequest.post('http://localhost:8000/api/login', data);
  }

  logoutUser(token:any) {
    return this.httpRequest.get('http://localhost:8000/api/logout/' + token, {
      headers: this.header
    })
  }

  showRanking(){
    return this.httpRequest.get('http://localhost:8000/api/showRanking');
  }

  updateRanking(data:any){
    return this.httpRequest.post('http://localhost:8000/api/updateRanking', data);
  }

  eliminarUsuario(id:any){
    return this.httpRequest.delete('http://localhost:8000/api/eliminarUsuario/'+id);
  }
  mostrarUsuarios(){
    return this.httpRequest.get('http://localhost:8000/api/mostrarUsuarios');
  }
}
