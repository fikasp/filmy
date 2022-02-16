import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetaleComponent } from './detale/detale.component';

import { FilmyService } from './filmy.service';

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
