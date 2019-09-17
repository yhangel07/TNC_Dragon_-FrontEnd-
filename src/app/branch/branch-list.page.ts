import { Component, OnInit, NgZone } from '@angular/core';
import { BranchesListService } from './branches-list.service';
import { NavController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.page.html',
  styleUrls: ['./branch-list.page.scss'],
})
export class BranchListPage implements OnInit {
  branches: any;

  constructor(private navCtrl: NavController, private branchesList: BranchesListService,
    private branchList: BranchesListService, private photoViewer: PhotoViewer,
    private platform: Platform, private file: File) { }

  ngOnInit() {
    this.branches = this.branchesList.getBranches();
  }

  branchesOrderBy(prop: string) {
    return this.branches.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  goToMap(branch){
        this.navCtrl.navigateBack('/branch', { queryParams: { id:3, brandName: this.branchList.getBrandName(), selectedBranch: branch }});
  }

  viewPhoto(branch){
    var url = branch.img;
    const options = {
      share: true, 
      closeButton: true, 
      copyToReference: true,
      headers: "",
      piccasoOptions: {}
    };

    // var url = 'www/assets/img/tnc.png';
    
    this.photoViewer.show(this.file.applicationDirectory + 'www/' + url, branch.branch_name, options);
  }
}
