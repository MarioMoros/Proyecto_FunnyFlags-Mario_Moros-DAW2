import { Component } from '@angular/core';
import { UserdataService } from '../../../services/userdata.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  target:any = '';
  loading = false;

  constructor(private userdata: UserdataService){}

  ngOnInit(){
    this.userSettings();
  }

  userSettings(){
    this.target = '<div></div>';
    this.loading = true;
    this.userdata.getUserData(localStorage.getItem('user_details')).subscribe((response: any) =>{
      this.loading = false;
      this.target = '<div>Nombre: '+response.user[0].name+'</div>';
      this.target += '<div>Email: '+response.user[0].email+'</div>';
    });
  }


}
