import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { Router, RouterModule } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { element } from 'protractor';

declare var $: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  private login = { "email": null, "senha": null }
  private register = { "email": null, "senha": null, "senhaR": null, "nameEnterprise": null }

  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true

  }

  constructor(
    private user: UserService,
    private router: Router,
    private _service: NotificationsService) {
  }


  ngOnInit(): void {
    if (this.user.isLogged()) {
      this.router.navigate(['/dashboard']);
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

          this.user.login(this.login).then((result: any) => {
            if (result) {
              if (result.status == "success") {
                this._service.success('Sucesso', result.message);
                this.user.setUserloggedIn(result);
                $(".form-item.log-in .btn").removeClass("loading");

                this.router.navigate(['/dashboard']);

              } else {
                this._service.error('Erro', result.message);
                $(".form-item.log-in .btn").removeClass("loading");

              }
            }
          })
        });
      }
    }
  }

  private validatePasswords() {
    return true
  }

  private clearFormRegister() {
    this.register = { "email": null, "senha": null, "senhaR": null, "nameEnterprise": null }
  }

  private registerAccount() {
    if (this.register.email && this.validatePasswords() && this.register.nameEnterprise) {
      if (!$(".form-item.sign-up .btn").hasClass("loading")) {
        $(".form-item.sign-up .btn").addClass("loading"); {
          return new Promise((resolve, reject) => {

            this.user.register(this.register).then((result: any) => {
              if (result) {
                if (result.status == "success") {
                  this._service.success('Sucesso', result.message);
                  this.toLoggin();
                  this.clearFormRegister();
                  $(".form-item.sign-up .btn").removeClass("loading");
                } else {
                  this._service.error('Erro', result.message);
                  $(".form-item.sign-up .btn").removeClass("loading");
                }
              }
            })

          });
        }
      }
    }

  }


}
