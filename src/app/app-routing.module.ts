import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    // charge le module et active le apres (Lazy load)
    path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then( a => a.AdminModule), canActivate: [AuthGuard]
  },

  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
