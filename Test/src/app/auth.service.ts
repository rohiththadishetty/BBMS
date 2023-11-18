import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private readonly baseUrl = 'http://localhost:3000/api';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, public router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(type:string, body:any) {
    return this.http.post(`${this.baseUrl}/${type}`, body);
  }
  login(type: string, body: any) {
    return this.http.post(`${this.baseUrl}/${type}/login`, body)
      .pipe(map((user:any) => {
        if (user && user.id) {
          console.log(user);
          user.role = type;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['signin']);
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  getToken(): any {
    return this.currentUserSubject?.value?.id;
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('currentUser');
    return authToken !== null ? true : false;
  }
}
