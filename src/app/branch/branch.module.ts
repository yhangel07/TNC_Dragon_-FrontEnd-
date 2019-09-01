import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, PickerController } from '@ionic/angular';

import { BranchPage } from './branch.page';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PipesModule } from '../pipe/pipe.module';

const routes: Routes = [
  {
    path: '',
    component: BranchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LeafletModule,
    PipesModule
  ],
  declarations: [BranchPage]
})
export class BranchPageModule {}
