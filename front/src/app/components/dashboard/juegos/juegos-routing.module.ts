import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { JuegosBanderasComponent } from './juegos-banderas/juegos-banderas.component';
import { JuegosMapasComponent } from './juegos-mapas/juegos-mapas.component';
import { JuegosQuizComponent } from './juegos-quiz/juegos-quiz.component';
import { JuegosTutorialesComponent } from './juegos-tutoriales/juegos-tutoriales.component';
import { JuegoMapaEuropaComponent } from './juegos-mapas/juego-mapa-europa/juego-mapa-europa.component';
import { JuegoBanderasEuropaComponent } from './juegos-banderas/juego-banderas-europa/juego-banderas-europa.component';
import { JuegoQuizEuropaComponent } from './juegos-quiz/juego-quiz-europa/juego-quiz-europa.component';
import { TutorialPaisesEuropaComponent } from './juegos-tutoriales/tutorial-paises-europa/tutorial-paises-europa.component';
import { TutorialPaisesMundoComponent } from './juegos-tutoriales/tutorial-paises-mundo/tutorial-paises-mundo.component';
import { TutorialBanderasEuropaComponent } from './juegos-tutoriales/tutorial-banderas-europa/tutorial-banderas-europa.component';




const routes: Routes = [
  {path: '', component: JuegosComponent, children: [
    {path: 'juegos_banderas', component: JuegosBanderasComponent},
    {path: 'juegos_mapas', component: JuegosMapasComponent},
    {path: 'juegos_quiz', component: JuegosQuizComponent},
    {path: 'juegos_tutoriales', component: JuegosTutorialesComponent},
  ]},
  {path: 'juego_mapa_europa', component: JuegoMapaEuropaComponent},
  {path: 'juego_banderas_europa', component: JuegoBanderasEuropaComponent},
  {path: 'juego_quiz_europa', component: JuegoQuizEuropaComponent},
  {path: 'juego_tutorial_mapa_europa', component: TutorialPaisesEuropaComponent},
  {path: 'juego_tutorial_mapa_mundo', component: TutorialPaisesMundoComponent},
  {path: 'juego_tutorial_banderas_europa', component: TutorialBanderasEuropaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
