import { Component, OnInit } from '@angular/core';
import { FilmyService } from '../../services/filmy.service';
import { Film } from '../../interfaces/film';

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


