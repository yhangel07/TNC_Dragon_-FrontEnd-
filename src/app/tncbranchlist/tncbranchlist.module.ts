import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TncbranchlistPage } from './tncbranchlist.page';

const routes: Routes = [
  {
    path: '',
    component: TncbranchlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TncbranchlistPage]
})
export class TncbranchlistPageModule {}
