import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choosecomp',
  templateUrl: './choosecomp.page.html',
  styleUrls: ['./choosecomp.page.scss'],
})
export class ChoosecompPage implements OnInit {

  shops: any[] = [
    {
      id: 1,
      name: 'TNC',
    }
  ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;

  constructor() { }

  ngOnInit() {
  }

 
}
