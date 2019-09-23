import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs/observable/timer';

import { AuthenticationService } from './loginExtras/authentication.service';
import { User } from './loginExtras/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = true;
  currentUser: User;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Profile',
      url: '/myprofile',
      icon: 'person'
    },
    {
      title: 'Find Branches',
      url: '/choosecomp',
      icon: 'locate'
    },
    {
      title: 'Rewards',
      url: '/rewards',
      icon: 'gift'
    },
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'call'
    },
    {
      title: 'About Us',
      url: '/aboutUs',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    if(this.currentUser){
      this.initializeApp();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false);
    });
  }

  toLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
