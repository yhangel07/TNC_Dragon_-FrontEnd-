import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = true;

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
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false);
    });
  }
}
