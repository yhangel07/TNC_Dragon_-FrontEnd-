import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BranchesListService } from '../branch/branches-list.service';


@Component({
  selector: 'app-branchprofile',
  templateUrl: './branchprofile.page.html',
  styleUrls: ['./branchprofile.page.scss'],
})
export class BranchprofilePage implements OnInit {
  id: any;
  branch: any;
  brand: any;
  showPromos: boolean;
  showTournament: boolean;


  constructor(private route: ActivatedRoute, private branchesList: BranchesListService) {  }

  ngOnInit() {
    this.showPromos = false;
    this.showTournament = false;
    this.route.queryParams
      .filter(params => params.id)
      .subscribe(params => {
        this.id = params.id;

        this.branch = this.branchesList.getBranchById(this.id);
        this.brand = this.branchesList.getBrandName();
      });

      console.log(this.branch);
  }
}
