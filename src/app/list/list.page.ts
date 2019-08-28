
import { Component, OnInit, NgZone } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list.page',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit{
  public filter: string;

  mapInit: Boolean = false;
  center: any = null;
  layers: any = null;
  userLoc: any;
  zoom: any;
  options: any;
  branchFilter: string='';
  items: any;

  ngOnInit(){ 
    this.userCurrentLocation();
  }

  constructor(private geolocation: Geolocation, public alertController: AlertController) { 
    this.items = [
      {
        "branch_name": "legarda",
        "coordinates": {
            "lat": 14.598475, 
            "lon": 120.989855
        }
    },
    {
        "branch_name": "arlegui",
        "coordinates": {
            "lat": 14.597146,
            "lon": 120.986680
        }
    },
    {
        "branch_name": "recto",
        "coordinates": {
            "lat": 14.601963,
            "lon": 120.988461
        }
    },
    {
        "branch_name": "gastambide",
        "coordinates": {
            "lat": 14.601818,
            "lon": 120.990993
        }
    },
    {
        "branch_name": "morayta",
        "coordinates": {
            "lat": 14.604310, 
            "lon": 120.987688
        }
    }
    
    
  ];
   }

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

 

  // options = {
  //   layers: [this.streetMaps],
  //   zoom: 17,
  //   center: this.userCurrentLocation()
  // };

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
    }
  }

  


  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

