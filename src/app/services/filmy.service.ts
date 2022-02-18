import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})

export class FilmyService {

  private filmy: Film[] = [
    {id: 0, tytul: 'Ojciec Chrzestny 1'},
    {id: 1, tytul: 'Ojciec Chrzestny 2'},
    {id: 2, tytul: 'Ojciec Chrzestny 3'},
  ]

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }

  getFilm(id: number): Film{
    return this.filmy[id];
  }
  constructor() { }
}
