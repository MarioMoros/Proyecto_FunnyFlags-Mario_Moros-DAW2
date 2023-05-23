import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { JuegosComponent } from './juegos.component';


import { JuegoBanderasEuropaComponent } from './juegos-banderas/juego-banderas-europa/juego-banderas-europa.component';
import { JuegoMapaEuropaComponent } from './juegos-mapas/juego-mapa-europa/juego-mapa-europa.component';
import { TutorialBanderasEuropaComponent } from './juegos-tutoriales/tutorial-banderas-europa/tutorial-banderas-europa.component';
import { TutorialPaisesEuropaComponent } from './juegos-tutoriales/tutorial-paises-europa/tutorial-paises-europa.component';
import { TutorialPaisesMundoComponent } from './juegos-tutoriales/tutorial-paises-mundo/tutorial-paises-mundo.component';
import { JuegoQuizEuropaComponent } from './juegos-quiz/juego-quiz-europa/juego-quiz-europa.component';
import { JuegosBanderasComponent } from './juegos-banderas/juegos-banderas.component';
import { JuegosMapasComponent } from './juegos-mapas/juegos-mapas.component';
import { JuegosQuizComponent } from './juegos-quiz/juegos-quiz.component';
import { JuegosTutorialesComponent } from './juegos-tutoriales/juegos-tutoriales.component';



@NgModule({
  declarations: [
    JuegosComponent,
    JuegoBanderasEuropaComponent,
    JuegoMapaEuropaComponent,
    JuegoQuizEuropaComponent,
    TutorialBanderasEuropaComponent,
    TutorialPaisesEuropaComponent,
    TutorialPaisesMundoComponent,
    JuegosBanderasComponent,
    JuegosMapasComponent,
    JuegosQuizComponent,
    JuegosTutorialesComponent

  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    SharedMaterialModule
  ]
})
export class JuegosModule { }
