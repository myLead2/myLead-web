import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';

//pages
import { HomeComponent }       from './components/home/home.component';
import { FooterComponent }     from './components/defaults/footer/footer.component';
import { AuthComponent }       from './components/defaults/auth/auth.component';
import { NavbarComponent }     from './components/defaults/navbar/navbar.component';
import { NavbarDashComponent } from './components/defaults/navbar-dash/navbar-dash.component';
import { DashboardComponent }  from './components/dashboard/dashboard/dashboard.component';
import { UserProfileComponent }  from './components/dashboard/user-profile/user-profile.component';
import { SidebarComponent }    from './components/defaults/sidebar/sidebar.component';
import { AppComponent }           from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { routing }                from './app.routing';
import { Component, OnInit  } from '@angular/core';
import { AuthguardGuard } from './authguard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService }         from './user.service';
import { ChartsModule }        from 'ng2-charts';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { SendCsvComponent } from './components/dashboard/send-csv/send-csv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    NavbarDashComponent,
    SendCsvComponent,
    UserProfileComponent,
    FooterComponent,
    AuthComponent,
    DashboardComponent
    
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
  providers: [UserService, AuthguardGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
