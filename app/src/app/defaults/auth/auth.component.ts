import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';
import { UtilityService } from '../../utility.service';
import { element } from 'protractor';

declare var $: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  private API_URL  = "https://mylead2-api.herokuapp.com/api";
  private login    = { "email": null, "senha": null }
  private register = { "email": null, "senha": null, "senhaR": null, "nameEnterprise": null}
  
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true

  }

  constructor(
    private utility: UtilityService,
    private user: UserService,
    private router: Router,
    private _http: Http,
    private _service: NotificationsService) {
  }


  ngOnInit(): void {
    if (this.utility.islogged()) {
      this.router.navigate(['/dashoboard']);
    }

  }


  private toRegister() {
      $(".container").addClass("log-in");
  }

  private toLoggin() {
      $(".container").removeClass("log-in");
  }

  private loginAccount() {
    if (this.login.email && this.login.senha) {
      if (!$(".form-item.log-in .btn").hasClass("loading")) {
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
                        'id': result.json().data.id_usuario
                      }));
                  }

                  this.router.navigate(['/dashboard']);

                } else {
                  this._service.error('Erro', result.json().message);
                  $(".form-item.log-in .btn").removeClass("loading");

                }
              }
            },
            (error) => {
              reject(error.json())
            });
        });
      }
    }
  }

  private validatePasswords(){
    return true
  }

  private clearFormRegister(){
    this.register = { "email": null, "senha": null, "senhaR": null, "nameEnterprise": null}
  }

  private registerAccount(){
    if (this.register.email && this.validatePasswords() && this.register.nameEnterprise) {
      if (!$(".form-item.log-in .btn").hasClass("loading")) {
        $(".form-item.log-in .btn").addClass("loading");{
          return new Promise((resolve, reject) => {
            this._http.post(this.API_URL + '/enterprise', this.register)
              .subscribe((result: any) => {
                if (result.json()) {
                  if (result.json().status == "success") {
                    this._service.success('Sucesso', result.json().message);
                    this.toLoggin();
                    this.clearFormRegister();
  
                  } else {
                    this._service.error('Erro', result.json().message);
                    $(".form-item.log-in .btn").removeClass("loading");
  
                  }
                }
              },
              (error) => {
                reject(error.json())
              });
          });
        }
      }
    }
      
  }


}
