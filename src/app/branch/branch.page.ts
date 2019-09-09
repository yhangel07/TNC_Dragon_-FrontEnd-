import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

import { icon, latLng, marker, Layer, tileLayer } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, NavController, PickerController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { PickerOptions, PickerButton } from '@ionic/core';
import { BranchesListService } from './branches-list.service';
import * as L from 'leaflet';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {

  brand: string;
  id: number;
  center: any = null;
  zoom: any;
  userLoc: any;
  mapInit: Boolean = false;
  options: any;
  branchesCoords: any;
  branchesMarkers: Layer[]= [];
  branchesMarkersLessFiveKM: Layer[]= [];
  coords: any;
  branches: any;
  filter = 'All Branches';
  branch_list: any;
  map: any;
  branch: any;

  constructor(private route: ActivatedRoute, private geolocation: Geolocation, 
      public alertController: AlertController, private navCtrl: NavController,
      private pickerCtrl: PickerController, private router: Router,
      private branchesList: BranchesListService) {

        route.queryParams.subscribe(val => {
          this.brand = val.brandName;
          branchesList.setBrandName(this.brand);
          this.id = val.id;
          this.branch = val.selectedBranch;

          this.initializeMap();
          this.getBranches(false);

          if(this.id == 3){
            this.onMarkerClick(this.branch);
          }
      });
      }

  async ngOnInit() {  }

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  async getBranches(filtered: Boolean){
    let ref = await this.getUserLocation();

    this.branchesList.getRawBranches()
      .subscribe(branches => {
        this.branch_list = branches;
        this.branch_list.forEach(branch => {
          this.branchesCoords = marker(branch.coordinates, {
            icon: icon({
              iconSize: [ 30, 46 ],
              iconAnchor: [ 17, 46 ],
              iconUrl: '../assets/img/tnc_map_marker.png',
              shadowUrl: 'assets/marker-shadow.png',
              popupAnchor: [ 0, -41 ]
            })
          }).on('click', this.onMarkerClick.bind(this, branch))
          .bindPopup('<h4>'+ branch.branch_name + '</h4>');
          

          //check distance from user
          let distance: number =  this.branchesCoords.getLatLng().distanceTo(ref);
          branch.distance = distance;

          this.branchesList.setBranches(this.branch_list);

          if (distance < 5000){
            this.branchesMarkersLessFiveKM.push(this.branchesCoords);
          }
          
          this.branchesMarkers.push(this.branchesCoords);
          
          if(filtered){
            this.branches = this.branchesMarkersLessFiveKM;
          }else{
            this.branches = this.branchesMarkers;

          }
        });
    });
  }

  async getUserLocation(): Promise<any>{

    try {
      let resp = await this.geolocation.getCurrentPosition();
      this.coords = [resp.coords.latitude, resp.coords.longitude]
      return this.coords;
    } catch (error) {
      console.log('Error getting location', error);
      this.presentAlert({
        subHeader: 'Access to geolocation was blocked',
        message: 'Please allow location detection to use feature'
      });
    }
  }

  async initializeMap(){
      let coords = await this.getUserLocation();

      this.center = latLng(coords);
      this.zoom = 14;
    
      this.userLoc =  marker( coords, {
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: '../assets/img/default_location_marker.png',
            shadowUrl: 'assets/marker-shadow.png'
          })
      });

      this.options = {
          layers: [this.streetMaps, this.userLoc],
          zoom: this.zoom,
          zoomControl: false,
          center: this.center
      };

      this.mapInit = true;

  };

    async onMapReady(map: L.Map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 0);

      this.map = map;
    };

    meterToKM(dist){
       dist = dist / 1000;
       return Math.round( dist * 100 + Number.EPSILON ) / 100;
    };

    
    async onMarkerClick(branch,marker?) {
      await this.map.setView(branch.coordinates, 18);
      // var popup = new L.Popup({
      //   offset:  new L.Point(0, -40)
      // });
      // popup.setLatLng(branch.coordinates);
      // popup.setContent('<h4>'+ branch.branch_name + '</h4>');
      // this.map.openPopup(popup);

      const branchPopUp = await this.alertController.create({
        header: branch.branch_name,
        subHeader: branch.address,
        message:`
        <div>
          <p>
            <a href="`+ branch.facebook_link + `">` +
              branch.facebook_link +
           `</a>
          </p>
          <hr>
          <p>
            <span>Branch Distance: </span>`+ this.meterToKM(branch.distance) + ` km
          </p>
        </div>
        `,
        buttons: [
          {
            text: 'View Details',
            handler: () => {
              this.navCtrl.navigateForward('/branchprofile', { queryParams: { id: branch.id }});
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary'
          }
        ]
      });
  
      await branchPopUp.present();
        branchPopUp.onDidDismiss().then((data) => {});
    }

    async presentAlert(message:any) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: message.subHeader,
        message: message.message,
        buttons: ['OK']
      });
  
      await alert.present();
      alert.onDidDismiss().then((data) => {
        this.navCtrl.navigateRoot('/choosecomp');
      });
    }

    async showAdvancedPicker() {
      let opts: PickerOptions = {
        cssClass: 'my-picker',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Done'
          }
        ],
        columns: [
          {
            name: 'filter',
            options: [
              { text: 'All Branches', value: 'all' },
              { text: 'Nearest Branches (5 KM)', value: 'nearest' }
            ]
          }
        ]
      };

      let picker = await this.pickerCtrl.create(opts);
      picker.present();
      picker.onDidDismiss().then(async data => {
        let col = await picker.getColumn('filter');
        this.filter = col.options[col.selectedIndex].text;
        if(col.options[col.selectedIndex].value == 'all'){
          this.getBranches(false);
        }else{
          this.getBranches(true);
        }
      });
    }

    showList(){
      this.navCtrl.navigateForward('/branch-list');
    }
}
