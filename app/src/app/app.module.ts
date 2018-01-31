import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';

//pages
import { HomeComponent }       from './home/home.component';
import { FooterComponent }     from './defaults/footer/footer.component';
import { AuthComponent }      from './defaults/auth/auth.component';
import { SidebarComponent }    from './dashboard/sidebar/sidebar.component';
import { Grafico2Component }   from './dashboard/grafico2/grafico2.component';
import { Grafico1Component }   from './dashboard/grafico1/grafico1.component'
import { NavbarComponent }     from './defaults/navbar/navbar.component';
import { DashboardComponent }  from './dashboard/dashboard/dashboard.component';
import { EnviarbaseComponent } from './dashboard/enviarbase/enviarbase.component';

import { AppComponent }           from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { routing }                from './app.routing';
import { Component, OnInit  } from '@angular/core';
import { AuthguardGuard } from './authguard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService }         from './user.service';
import { ChartsModule }        from 'ng2-charts';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UtilityService } from './utility.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    SidebarComponent,
    EnviarbaseComponent,
    Grafico1Component,
    Grafico2Component
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpModule,
    routing,
    ChartsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService, AuthguardGuard, UtilityService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
