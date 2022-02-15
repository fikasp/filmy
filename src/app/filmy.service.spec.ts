import { TestBed } from '@angular/core/testing';

import { FilmyService } from './filmy.service';

describe('FilmyService', () => {
  let service: FilmyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
