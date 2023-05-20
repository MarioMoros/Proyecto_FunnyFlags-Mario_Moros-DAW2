import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { JuegosComponent } from './juegos.component';
import { JuegosMapasComponent } from './juegos-mapas/juegos-mapas.component';
import { JuegosBanderasComponent } from './juegos-banderas/juegos-banderas.component';
import { JuegosQuizComponent } from './juegos-quiz/juegos-quiz.component';
import { JuegosTutorialesComponent } from './juegos-tutoriales/juegos-tutoriales.component';
import { PaisesMundoComponent } from './juegos-tutoriales/paises-mundo/paises-mundo.component';
import { PaisesEuropaComponent } from './juegos-tutoriales/paises-europa/paises-europa.component';
import { BanderasEuropaComponent } from './juegos-tutoriales/banderas-europa/banderas-europa.component';


@NgModule({
  declarations: [
    JuegosComponent,
    JuegosQuizComponent,
    JuegosBanderasComponent,
    JuegosMapasComponent,
    JuegosTutorialesComponent,
    PaisesMundoComponent,
    PaisesEuropaComponent,
    BanderasEuropaComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    SharedMaterialModule
  ]
})
export class JuegosModule { }
