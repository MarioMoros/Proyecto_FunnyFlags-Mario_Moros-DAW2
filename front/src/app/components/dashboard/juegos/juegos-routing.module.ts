import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';


import { JuegoBanderasEuropaComponent } from './juegos-banderas/juego-banderas-europa/juego-banderas-europa.component';
import { JuegoQuizEuropaComponent } from './juegos-quiz/juego-quiz-europa/juego-quiz-europa.component';
import { JuegoMapaEuropaComponent } from './juegos-mapas/juego-mapa-europa/juego-mapa-europa.component';
import { TutorialBanderasEuropaComponent } from './juegos-tutoriales/tutorial-banderas-europa/tutorial-banderas-europa.component';
import { TutorialPaisesEuropaComponent } from './juegos-tutoriales/tutorial-paises-europa/tutorial-paises-europa.component';
import { TutorialPaisesMundoComponent } from './juegos-tutoriales/tutorial-paises-mundo/tutorial-paises-mundo.component';

const routes: Routes = [
  {path: '', component: JuegosComponent, children: [
    {path: 'juego_banderas_europa', component: JuegoBanderasEuropaComponent},
    {path: 'juego_mapa_europa', component: JuegoMapaEuropaComponent},
    {path: 'juego_quiz_europa', component: JuegoQuizEuropaComponent},
    {path: 'tutorial_banderas_europa', component: TutorialBanderasEuropaComponent},
    {path: 'tutorial_paises_europa', component: TutorialPaisesEuropaComponent},
    {path: 'tutorial_paises_mundo', component: TutorialPaisesMundoComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
