import { Component, OnInit } from '@angular/core';
import { FilmyService } from '../filmy.service';

export interface Film {
  id: Number 
  tytul: String
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  filmy: Film[] = [];

  constructor( private fs: FilmyService) { }
 
  ngOnInit() {
    this.filmy = this.fs.wszystkieFilmy();
    console.log(this.filmy);
    
  }

}


