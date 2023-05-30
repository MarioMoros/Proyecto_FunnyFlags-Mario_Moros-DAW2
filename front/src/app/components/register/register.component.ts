import { Component } from '@angular/core';
import { Register } from './register.model';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register = new Register();
  loading = false;
  target:any = '';

  constructor(private userdata: UserdataService, private router: Router){}

  registerUser(){
    if(this.register.name == undefined || this.register.email == undefined
      || this.register.password == undefined){
        this.target = '<div>Rellene todos los campos</div>';
      }else{
        this.target = '<div></div>';
        this.loading = true;
        this.userdata.registerUser(this.register).subscribe((response: any) =>{
          if(response.code == 1){
            this.target = '<div>'+response.message+'</div>';
            setTimeout(()=>{
              this.router.navigate(['login']);
            }, 2000);
          }else{
            if(response.error.email != undefined){
              this.loading = false;
              this.target = '<div>'+response.error.email+'</div>';
            }else if(response.error.password != undefined){
              this.loading = false;
              this.target = '<div>'+response.error.password+'</div>';
            }else if(response.error.name != undefined){
              this.loading = false;
              this.target = '<div>'+response.error.name+'</div>';
            }
          }
        });
      }
  }
}
