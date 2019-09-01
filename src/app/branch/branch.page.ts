import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {

  brand: string;
  center: any = null;
  zoom: any;
  userLoc: any;
  mapInit: Boolean = false;
  options: any;

  constructor(private route: ActivatedRoute, private geolocation: Geolocation, public alertController: AlertController, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.brandName)
      .subscribe(params => {
        this.brand = params.brandName;
      });

    this.userCurrentLocation();

  }

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  userCurrentLocation(){


    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.center = latLng(resp.coords.latitude, resp.coords.longitude);
      this.zoom = 17;

      

      this.userLoc =  marker([ resp.coords.latitude, resp.coords.longitude ], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: '../assets/img/default_location_marker.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      });

      //this.layers = [this.streetMaps, this.userLoc];
      this.options = {
        layers: [this.streetMaps, this.userLoc],
        zoom: this.zoom,
        zoomControl: false,
        center: this.center
      };
      this.mapInit = true;
      //console.log(resp.coords.latitude, resp.coords.longitude);
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
