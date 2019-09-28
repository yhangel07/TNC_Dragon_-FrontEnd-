import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class BranchesListService {
  branches: any;
  brandName: any;

  //url = "http://localhost:8100/assets/sample_branch.json"; //TODO change to actual API
  url = environment.apiURL + '/branches';
  
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

  getBranchById(id){
    return this.branches.find( branch => branch.id === id);
  }

  setBrandName(brandName:any){
    this.brandName = brandName;
  }

  getBrandName(){
    return this.brandName;
  }
}
