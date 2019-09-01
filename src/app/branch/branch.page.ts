import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { icon, latLng, marker, Layer, tileLayer } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, NavController, PickerController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { PickerOptions, PickerButton } from '@ionic/core';


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


  constructor(private route: ActivatedRoute, private geolocation: Geolocation, 
      public alertController: AlertController, private navCtrl: NavController,
      private http: HttpClient, private pickerCtrl: PickerController) {}

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.brandName)
      .subscribe(params => {
        this.brand = params.brandName;
        this.id = params.id;
      });

    this.initializeMap();
    this.getBranches(false);
  }

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  async getBranches(filtered: Boolean){
    let ref = await this.getUserLocation();
    let filter: boolean;

    this.http.get<any[]>('http://localhost:8100/assets/sample_branch.json') //TODO change to actual API
      .subscribe(branches => {
        branches.forEach(branch => {
          this.branchesCoords = marker(branch.coordinates, {
            icon: icon({
              iconSize: [ 30, 46 ],
              iconAnchor: [ 17, 46 ],
              iconUrl: '../assets/img/tnc_map_marker.png',
              shadowUrl: 'assets/marker-shadow.png'
            })
          });

          //check distance from user
          let distance: number =  this.branchesCoords.getLatLng().distanceTo(ref);
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

    onMapReady(map: L.Map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 0);
    };

  
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

    async showBasicPicker() {
      let opts: PickerOptions = {
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
}
