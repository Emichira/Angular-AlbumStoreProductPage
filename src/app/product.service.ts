import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  // Injecting A Private Http Object In ProductService
  constructor(private _http: Http) { }

  // get method for returning JSON data from Album
  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(response => response.json());
  }

}
