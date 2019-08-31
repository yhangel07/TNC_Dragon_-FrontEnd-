import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {

  brand: string;
  something: String;
  
  constructor(private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.brandName)
      .subscribe(params => {

        this.brand = params.brandName;
      });
    }

}
