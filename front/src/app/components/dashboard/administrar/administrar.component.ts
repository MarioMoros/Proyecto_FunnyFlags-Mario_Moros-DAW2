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
  existen = false;

  target = '';

  constructor(private userdata: UserdataService){}

  ngOnInit(){
    this.mostrarUsuarios();
  }

  eliminarUsuario(id:any, usuario:any){
    this.loading = true;
    this.userdata.eliminarUsuario(id).subscribe((response: any) =>{
      this.target = 'Se ha eliminado al usuario: '+usuario;

      setTimeout(()=>{
        this.loading = false;
        this.dataSource = [];
        this.arrayUsuarios = [];
        this.mostrarUsuarios();
      }, 2000);

    });
  }

  mostrarUsuarios(){
    this.loading = true;
    this.userdata.mostrarUsuarios().subscribe((response: any) =>{
      this.json = response;
      if(this.json.length > 0){
        this.existen = true;
      }
      for (let index = 0; index < this.json.length; index++) {
          this.arrayUsuarios.push(this.json[index]);
      }
      this.dataSource = this.arrayUsuarios;
      this.loading = false;
    });
  }
}
