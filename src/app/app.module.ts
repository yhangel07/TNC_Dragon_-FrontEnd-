import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from "./pipe/pipe.module";
import { File } from '@ionic-native/file/ngx';
import { ReactiveFormsModule }    from '@angular/forms';

import { fakeBackendProvider } from './loginExtras/fake-backend'; //TODO Delete after testing
import { JwtInterceptor } from './loginExtras/jwt.interceptor';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BranchesListService } from './branch/branches-list.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    PipesModule,
    ReactiveFormsModule
  ],
  providers: [
    BranchesListService,
    StatusBar,
    SplashScreen,
    Geolocation,
    LocationAccuracy,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PhotoViewer,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    fakeBackendProvider //TODO delete after testing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
