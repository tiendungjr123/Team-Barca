import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
  },
  {
    path:'detailPlayer',
    component: PlayerDetailComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
