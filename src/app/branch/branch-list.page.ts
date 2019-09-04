import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BranchesListService } from './branches-list.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.page.html',
  styleUrls: ['./branch-list.page.scss'],
})
export class BranchListPage implements OnInit {
  branches: any;

  constructor(private http: HttpClient, private branchesList: BranchesListService) { }

  ngOnInit() {
    this.branches = this.branchesList.getBranches();
    console.log(this.branches);

  }

  branchesOrderBy(prop: string) {
    return this.branches.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
