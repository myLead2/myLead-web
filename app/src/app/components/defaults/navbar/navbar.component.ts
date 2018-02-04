import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from '../../../user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(
        private location: Location,
        private user: UserService) { }

    ngOnInit() {
    }

    private isLogged() {
        return this.user.isLogged();
    }

    private showLoginBtn() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        let showLogin = true;
        let isLogged = this.isLogged();

        if (titlee === '/login') {
            showLogin = false;
        }
        return !isLogged && showLogin;
    }

    private showHomeBtn() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        let showHome = true;

        if (titlee === '/') {
            showHome = false;
        }
        return showHome;
    }

    private logout() {
        this.user.logout();
        location.reload();
        
    }
}
