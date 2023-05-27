import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private userdata: UserdataService, private router: Router){}

  loading = false;
  target:any = '';
  esAdmin = false;
  id:any;

  ngOnInit(){
    this.id = localStorage.getItem('userId');
    if(parseInt(this.id) == 29){
      this.esAdmin = true;
    }
  }

  logoutUser(){
    this.target = '<div></div>';
    this.loading = true;
    this.userdata.logoutUser(localStorage.getItem('token')).subscribe((response: any) => {
      if (response.code == 1) {
        localStorage.removeItem('token');
        localStorage.removeItem('user_details');
        localStorage.removeItem('userId');
        this.target = '<div>'+response.message+'</div>';
        setTimeout(()=>{
          this.router.navigate(['/']);
        }, 2000);
      }
      else if (response.code == 2) {
        this.loading = false;
        this.target = '<div>'+response.message+'</div>';
      }
    });
  }
}
