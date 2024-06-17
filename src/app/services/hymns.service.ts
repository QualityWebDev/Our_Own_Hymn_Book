import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HymnsModel } from '../models/hymns.model';

@Injectable({
  providedIn: 'root'
})
export class HymnsService {
  private apiUrl = 'http://localhost:3000/hymns';

  constructor(private _httpClient: HttpClient){}

  addHymn(hymn: HymnsModel): Observable<any>{
    return this._httpClient.post<any>(this.apiUrl, hymn);
  }
  getAllHymns(): Observable<HymnsModel[]>{
    return this._httpClient.get<HymnsModel[]>(this.apiUrl);
  }
}