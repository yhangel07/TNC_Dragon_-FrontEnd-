import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { icon, latLng, marker, Layer, tileLayer } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

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

  constructor(private route: ActivatedRoute, private geolocation: Geolocation, 
      public alertController: AlertController, private navCtrl: NavController,
      private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.brandName)
      .subscribe(params => {
        this.brand = params.brandName;
        this.id = params.id;
      });

    this.userCurrentLocation();
    this.getBranches();
  }

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  getBranches(){
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

          this.branchesMarkers.push(this.branchesCoords);
        });
    });
  }

  userCurrentLocation(){


    this.geolocation.getCurrentPosition().then((resp) => {
      this.center = latLng(resp.coords.latitude, resp.coords.longitude);
      this.zoom = 16;

      

      this.userLoc =  marker([ resp.coords.latitude, resp.coords.longitude ], {
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
     }).catch((error) => {
       console.log('Error getting location', error);
       this.presentAlert();
     });
  }

    onMapReady(map: L.Map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 0);
    }

  
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Access to geolocation was blocked',
        message: 'Please allow location detection to use feature',
        buttons: ['OK']
      });
  
      await alert.present();
      alert.onDidDismiss().then((data) => {
        this.navCtrl.navigateRoot('/choosecomp');
      });
    }
}
