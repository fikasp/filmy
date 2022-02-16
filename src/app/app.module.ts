import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { DetaleComponent } from './components/detale/detale.component';

import { FilmyService } from './services/filmy.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilmyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
