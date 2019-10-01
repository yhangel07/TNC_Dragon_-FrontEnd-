import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ScrollVanishDirective } from '../directives/scroll-vanish.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        //canActivate: [AuthGuard] //TO Remove
        
      }
    ])
  ],
  declarations: [HomePage, ScrollVanishDirective]
})
export class HomePageModule {}
