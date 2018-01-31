import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private location: Location,
    private util: UtilityService) { }

    ngOnInit() {
    }

    private isLogged(){
        return this.util.islogged()
    }

    private showLoginBtn() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        let showLogin = true;
        let isLogged = this.isLogged();
        
        if( titlee === '/login' ) {
            showLogin= false;
        }
        return !isLogged && showLogin;
    }
}
