import { Component } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent {
  loading = false;
  displayedColumns: string[] = ['id', 'name', 'email', 'acciones'];
  dataSource:any;
  arrayUsuarios = [];
  json = [];

  constructor(private userdata: UserdataService){}

  ngOnInit(){
    this.mostrarUsuarios();
  }

  eliminarUsuario(id:any){
    this.loading = true;
    this.userdata.eliminarUsuario(id).subscribe((response: any) =>{
      this.loading = false;
      this.dataSource = [];
      this.arrayUsuarios = [];
      this.mostrarUsuarios();
    });
  }

  mostrarUsuarios(){
    this.loading = true;
    this.userdata.mostrarUsuarios().subscribe((response: any) =>{
      this.json = response;
      for (let index = 0; index < this.json.length; index++) {
          this.arrayUsuarios.push(this.json[index]);
      }
      this.dataSource = this.arrayUsuarios;
      this.loading = false;
    });
  }
}
