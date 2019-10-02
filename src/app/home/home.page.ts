import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { WordpressService } from "./../wordpress.service";
import { AuthenticationService } from '../loginExtras/authentication.service';
import { UserService } from '../loginExtras/user.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../loginExtras/user';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from '../notifications/notifications.component';
import { CompanymenuComponent } from '../companymenu/companymenu.component';
import { PartnersService } from './partners.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  
  posts = [];
  page = 1;
  count = null;
  usr: any;
  partners: any;
 
  constructor(private wp: WordpressService, private loadingCtrl: LoadingController, private authenticationService: AuthenticationService,
              public popoverCtrl: PopoverController, private pt: PartnersService) { 
    
  }
 
  ngOnInit() {
    this.loadPosts();
    this.usr = this.authenticationService.currentUserValue;
    this.loadPartners();
  }

  async loadPartners(){
    this.pt.getAll()
      .subscribe(ress => {
        this.partners = ress;
      })
  }

  async loadPosts() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading Data...'
    });
    await loading.present();
 
    this.wp.getPosts().subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
      loading.dismiss();
    });
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: NotificationsComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
  }

  async compmenu(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: CompanymenuComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
  }
 
  loadMore(event) {
    this.page++;
 
    this.wp.getPosts(this.page).subscribe(res => {
      this.posts = [...this.posts, ...res];
      event.target.complete();
 
      // Disable infinite loading when maximum reached
      if (this.page == this.wp.pages) {
        event.target.disabled = true;
      }
    });
  }
 
}
