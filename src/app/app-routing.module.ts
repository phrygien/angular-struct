import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';

const routes: Routes = [
  {
    // charge le module et active le apres (Lazy load)
    path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then( a => a.AdminModule),
  },
  { path: '**', component: ErrorComponent },

  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
