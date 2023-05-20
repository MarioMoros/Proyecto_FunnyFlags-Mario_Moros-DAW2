import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { DashboardComponent } from './dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { LogrosComponent } from './logros/logros.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    LogrosComponent,
    InicioComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule
  ]
})
export class DashboardModule { }
