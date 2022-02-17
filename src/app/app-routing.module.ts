import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'fichedepaye',
    loadChildren: () => import('./fichedepaye/fichedepaye.module').then( m => m.FichedepayePageModule)
  },
  {
    path: 'soldeassurance',
    loadChildren: () => import('./soldeassurance/soldeassurance.module').then( m => m.SoldeassurancePageModule)
  },

  {
    path: 'soldedecong',
    loadChildren: () => import('./soldedecong/soldedecong.module').then( m => m.SoldedecongPageModule)
  },
  {
    path: 'certificatdimpot',
    loadChildren: () => import('./certificatdimpot/certificatdimpot.module').then( m => m.CertificatdimpotPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
