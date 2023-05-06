import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizsectionComponent } from './quizsection/quizsection.component';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"",redirectTo:"welcome",pathMatch:'full'},
  {path:"welcome",component:WelcomeComponent},
  {path:"questions",component:QuizsectionComponent},
  {path:"result",component:ResultsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
