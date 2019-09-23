import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  {
//    path: '',
//    redirectTo: 'home',
//    pathMatch: 'full'
//  },
    {
      path: '',
      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
  { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofilePageModule' },
  { path: 'branchprofile', loadChildren: './branchprofile/branchprofile.module#BranchprofilePageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' },
  { path: 'rewards', loadChildren: './rewards/rewards.module#RewardsPageModule' },
  { path: 'choosecomp', loadChildren: './choosecomp/choosecomp.module#ChoosecompPageModule' },
  { path: 'luckydraw', loadChildren: './luckydraw/luckydraw.module#LuckydrawPageModule' },
  { path: 'branch', loadChildren: './branch/branch.module#BranchPageModule' },
  { path: 'branch-list', loadChildren: './branch/branch-list.module#BranchListPageModule' },
  { path: 'home/:id', loadChildren: './post/post.module#PostPageModule' },
  { path: 'post', loadChildren: './post/post.module#PostPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'shop', loadChildren: './shop/shop.module#ShopPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
