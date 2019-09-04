import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipe/pipe.module';

import { BranchListPage } from './branch-list.page';

const routes: Routes = [
  {
    path: '',
    component: BranchListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [BranchListPage]
})
export class BranchListPageModule {}
