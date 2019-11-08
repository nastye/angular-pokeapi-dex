import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDexComponent } from './pokemon-dex/pokemon-dex.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: '', component: PokemonDexComponent, pathMatch: 'full' },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
