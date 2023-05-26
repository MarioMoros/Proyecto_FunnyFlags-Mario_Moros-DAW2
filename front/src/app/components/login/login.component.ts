import { Component } from '@angular/core';
import { Login } from './login.model';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = new Login();
  loading = false;
  target:any = '';
  token:any;
  user_details:any;
  userId:any;

  constructor(private userdata: UserdataService, private router: Router){}

  loginUser(){
    if(this.login.email == undefined || this.login.password == undefined){
        alert('Campos incorrectos');
      }else{
        this.target = '<div></div>';
        this.loading = true;
        this.userdata.loginUser(this.login).subscribe((response: any) =>{
          if(response.code == 1){
            this.token = localStorage.setItem('token', response.token);
            this.user_details = localStorage.setItem('user_details', response.user_details);
            this.userId = localStorage.setItem('userId', response.userId);
            this.target = '<div>'+response.message+'</div>';
            setTimeout(()=>{
              this.router.navigate(['dashboard']);
            }, 2000);
          }else if(response.code == 2){
            this.loading = false;
            this.target = '<div>'+response.message+'</div>';
          }else{
            if(response.error.email != undefined){
              this.loading = false;
              this.target = '<div>'+response.error.email+'</div>';
            }else if(response.error.password != undefined){
              this.loading = false;
              this.target = '<div>'+response.error.password+'</div>';
            }
          }
        });
      }
  }
}
