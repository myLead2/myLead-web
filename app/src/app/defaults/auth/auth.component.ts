import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';
import { UtilityService } from '../../utility.service';
import { element } from 'protractor';
import { CookieService } from 'ngx-cookie-service';

declare var $: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  private cookieValue = 'UNKNOWN';
  private API_URL = "https://mylead-api.herokuapp.com";
  private login = { "email_usuario": null, "senha_usuario": null }

  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true

  }

  constructor(
    private cookieService: CookieService,
    private utility: UtilityService,
    private user: UserService,
    private router: Router,
    private _http: Http,
    private _service: NotificationsService) { 
    }


  ngOnInit(): void {
    if(this.utility.islogged()){
        this.router.navigate(['/dashoboard']);
    }

  }


  private toRegister(){
    $(".info-item .btn").click(function(){
      $(".container").addClass("log-in");
    });
  }

  private toLoggin(){
    $(".info-item .btn").click(function(){
      $(".container").removeClass("log-in");
    });
  }

  private LoginAccount() {
    $(".form-item.log-in .btn").addClass("loading");
    return new Promise((resolve, reject) => {
      this._http.post(this.API_URL + '/login', this.login)
        .subscribe((result: any) => {
          if (result.json()) {
            if (result.json().status == "success") {
              this._service.success('Sucesso', result.json().message);
              this.user.setUserloggedIn();
              
              if (typeof (Storage) !== 'undefined') {
                sessionStorage.clear();
                sessionStorage.setItem('user', 
                JSON.stringify({ 
                  'nome': result.json().data.nome, 
                  'id': result.json().data.id_usuario }));
              }
              
              this.router.navigate(['/dashboard']);

            } else {
              this._service.error('Erro', result.json().message);

            }
          }
        },
        (error) => {
          reject(error.json())
        });
    });
  }


}
