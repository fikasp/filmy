import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmyService } from 'src/app/services/filmy.service';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {

  film: Film = {id: 0, tytul: ''};
  
  constructor(
    private fs: FilmyService,
    private route: ActivatedRoute,
    private location: Location
    ) { }
    
    ngOnInit() {
      
      const id = this.route.snapshot.paramMap.get('id')
      this.film = this.fs.getFilm(Number(id));
    }
    
    back(){
      this.location.back()
    }

}
