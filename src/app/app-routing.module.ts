import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaysComponent } from './component/plays/plays.component';

const routes: Routes = [
  { path: 'plays', component: PlaysComponent},
  { path: '**', redirectTo: '/plays'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
