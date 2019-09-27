import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../loginExtras/authentication.service';
import { UserService } from '../loginExtras/user.service';
import { User } from '../loginExtras/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  
  constructor(private authenticationService: AuthenticationService,
    private userService: UserService) { 
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
   }

  ngOnInit() {
  }

}
