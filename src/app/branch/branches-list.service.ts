import { Injectable } from '@angular/core';
import Branches from './branches';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BranchesListService {
  branches: any;

  url = "http://localhost:8100/assets/sample_branch.json"; //TODO change to actual API

  constructor(private http: HttpClient) { }

  getRawBranches(){
    return this.http.get(this.url);
  }

  setBranches(branches:any){
    this.branches = branches;
  }

  getBranches(){
    return this.branches;
  }
}
