import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { JuegosBanderasComponent } from './juegos-banderas/juegos-banderas.component';
import { JuegosMapasComponent } from './juegos-mapas/juegos-mapas.component';
import { JuegosQuizComponent } from './juegos-quiz/juegos-quiz.component';
import { JuegosTutorialesComponent } from './juegos-tutoriales/juegos-tutoriales.component';
import { BanderasEuropaComponent } from './juegos-tutoriales/banderas-europa/banderas-europa.component';
import { PaisesEuropaComponent } from './juegos-tutoriales/paises-europa/paises-europa.component';
import { PaisesMundoComponent } from './juegos-tutoriales/paises-mundo/paises-mundo.component';

const routes: Routes = [
  {path: '', component: JuegosComponent, children: [
    {path: 'juegos_banderas', component: JuegosBanderasComponent},
    {path: 'juegos_mapas', component: JuegosMapasComponent},
    {path: 'juegos_quiz', component: JuegosQuizComponent},
    {path: 'juegos_tutoriales', component: JuegosTutorialesComponent},
    {path: 'juegos_tutoriales/banderas_europa', component: BanderasEuropaComponent},
    {path: 'juegos_tutoriales/paises_europa', component: PaisesEuropaComponent},
    {path: 'juegos_tutoriales/paises_mundo', component: PaisesMundoComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
