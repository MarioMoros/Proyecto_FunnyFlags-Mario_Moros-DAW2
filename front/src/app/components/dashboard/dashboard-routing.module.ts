import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { LogrosComponent } from './logros/logros.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { RankingComponent } from './ranking/ranking.component';
import { AdministrarComponent } from './administrar/administrar.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'settings', component: SettingsComponent},
    {path: 'logros', component: LogrosComponent},
    {path: 'juegos', loadChildren: () => import('./juegos/juegos.module').then(x => x.JuegosModule)},
    {path: 'info', component: InfoComponent},
    {path: 'administrar', component: AdministrarComponent},
    {path: 'ranking', component: RankingComponent},
    {path: '', component: InicioComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
