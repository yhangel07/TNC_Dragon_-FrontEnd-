import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../loginExtras/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  usr: any;
  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.usr = this.authenticationService.currentUserValue;
    console.log(this.usr);
  }

  toLogout() {
    this.authenticationService.logout()
    .subscribe(
      data => {
        localStorage.removeItem('currentUser');
        this.authenticationService.currentUserSubject.next(null);
        this.router.navigate(['/login']);
      },
      error => {
          console.log('ERROR: ' + JSON.stringify(error.message));
      });      
  }
}
