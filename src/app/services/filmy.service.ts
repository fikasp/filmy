import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})

export class FilmyService {

  private filmy: Film[] = [
    {id: 0, tytul: 'Ojciec chrzestny 1'},
    {id: 1, tytul: 'Ojciec chrzestny 2'},
    {id: 2, tytul: 'Ojciec chrzestny 3'}
  ]

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }

  constructor() { }
}
