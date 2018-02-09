import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/enviar', title: 'Enviar Base', icon: 'backup', class: '' },
    
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./../../../../assets/sass/material-dashboard.scss']
})

export class SidebarComponent implements OnInit {
    menuItems: any[];
    enterprise = {"name": null};

    constructor(
        private user: UserService,
    ) {
        this.enterprise.name = this.user.getUserLoggedIn().nome;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
