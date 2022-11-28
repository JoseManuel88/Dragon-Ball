import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private isAuth = new BehaviorSubject<boolean>(false);
  private isAuth$ = this.isAuth.asObservable();

  private loading = new BehaviorSubject<boolean>(false);
  private loading$ = this.loading.asObservable();

  constructor() { }


  public setLoading(loading: boolean) {
    this.loading.next(loading);
  }

  public getLoading(): Observable<any> {
    return this.loading;
  }


  public setIsAuth(isAuth: boolean) {
    this.isAuth.next(isAuth);
  }

  public getIsAuth(): Observable<any> {
    return this.isAuth;
  }
  

}
