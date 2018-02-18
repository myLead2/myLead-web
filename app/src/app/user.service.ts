import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

declare const $:any;

@Injectable()

export class UserService {
  private API_UPLOAD_URL = "http://localhost:3000/api"
  private API_URL = "https://mylead2-api.herokuapp.com/api";
  // private API_URL = this.API_UPLOAD_URL;
 
  constructor(
    private _http: Http,
    private router: Router,
  ) { }

  isLogged() {
    return (JSON.parse(sessionStorage.getItem('user')) && true);
  }

  getUploadUrl() {
    // return this.API_UPLOAD_URL + "/upload"
    return this.API_URL + "/upload"

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

  uploadFile(form) {
      return new Promise( (resolve, reject) => {
        let formData = new FormData($(form)[0]);
        
        $.ajax({
            url: this.getUploadUrl()+'?' + $.param({'id':this.getUserLoggedIn().id}),
            type: 'POST',
            data: formData,

            success: function (data) {
              resolve(data);
            },
            cache: false,
            contentType: false,
            processData: false
        });
      })
      
  }

  getUserRequestData() {
    return new Promise((resolve, reject) => {
      this._http.post(this.API_URL + '/request/data', {'id':this.getUserLoggedIn().id }).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }

  getUserAnalitycData() {
    return new Promise((resolve, reject) => {
      this._http.post(this.API_URL + '/result/data', {'id':this.getUserLoggedIn().id }).subscribe((result) => {
        resolve(result.json());
      }, (error) => {
        reject(error.json())
      });
    })
  }

  getSuperLeads(){    
    return new Promise((resolve, reject) => {
      this._http.post(this.API_URL + '/result/result', {'id_user':this.getUserLoggedIn().id }).subscribe((result) => {
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
