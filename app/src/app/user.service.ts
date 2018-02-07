import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private API_URL = "https://mylead2-api.herokuapp.com/api";
  private API_UPLOAD_URL = "http://localhost:3000/api"

  constructor(
    private _http: Http,
    private router: Router,
  ) { }

  isLogged() {
    return (JSON.parse(sessionStorage.getItem('user')) && true);
  }

  getUploadUrl() {
    return this.API_UPLOAD_URL + "/upload"
  };

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

  uploadFile(file) {
    return new Promise((resolve, reject) => {
      //var buf = new Buffer(file.toString('binary'),'binary');

      // var bufferBase64 = new Buffer( file, 'binary' ).toString('base64');
      //var reader = new FileReader();
      // console.log(reader.readAsBinaryString(bufferBase64));


      console.log(typeof file);

      this._http.post(this.API_URL + '/upload', file).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error)
      })
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
