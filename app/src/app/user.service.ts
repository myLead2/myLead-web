import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private API_URL = "https://mylead2-api.herokuapp.com/api";

  constructor(
    private _http: Http,
    private router: Router,
  ) { }

  isLogged() {
    return (JSON.parse(sessionStorage.getItem('user')) && true);
  }

  setUserloggedIn(user) {
    sessionStorage.clear();
    sessionStorage.setItem('user',
      JSON.stringify({
        'nome': user.data.name,
        'email': user.data.email,
        'id': user.data.id
      }));
  }

  getUserLoggedIn() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  login(login) {
    return new Promise((resolve, reject) => {
      this._http.post(this.API_URL + '/enterprise/login', login).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }

  register(register) {
    return new Promise((resolve, reject) => {
      this._http.post(this.API_URL + '/enterprise', register).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }
}
