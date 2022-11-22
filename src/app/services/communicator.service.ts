import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private isAuth = new BehaviorSubject<boolean>(false);
  private isAuth$ = this.isAuth.asObservable();

  constructor() { }



  public setIsAuth(isAuth: boolean) {
    this.isAuth.next(isAuth);
  }

  public getIsAuth(): Observable<any> {
    return this.isAuth;
  }
  

}
