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

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  
  posts = [];
  page = 1;
  count = null;
 
  constructor(private wp: WordpressService, private loadingCtrl: LoadingController) { 
    
  }
 
  ngOnInit() {
    this.loadPosts();
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
