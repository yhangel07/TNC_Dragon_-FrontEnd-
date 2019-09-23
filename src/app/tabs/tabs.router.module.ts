import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'Branch',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../choosecomp/choosecomp.module').then(m => m.ChoosecompPageModule)
          }
        ]
      },
      {
        path: 'Me',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../myprofile/myprofile.module').then(m => m.MyprofilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
