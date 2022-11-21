import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

public getAllCharacters(): Observable<any>{
  return this.http.get("https://db-back.vercel.app/characters" )
}
public getCharacter(id: string): Observable<any>{
  return this.http.get("https://db-back.vercel.app/characters/" + id)
}
public createCharacter(character:any): Observable<any>{
  return this.http.post("https://db-back.vercel.app/characters/create/",character)
}
public deleteCharacter(character:any): Observable<any>{
  return this.http.delete("https://db-back.vercel.app/characters/delete/",character)
}

}
