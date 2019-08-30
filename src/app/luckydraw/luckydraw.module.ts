import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LuckydrawPage } from './luckydraw.page';

const routes: Routes = [
  {
    path: '',
    component: LuckydrawPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LuckydrawPage]
})
export class LuckydrawPageModule {}
