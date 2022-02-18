import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaleComponent } from '../components/detale/detale.component';
import { ListaComponent } from '../components/lista/lista.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'film/:id', component: DetaleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
