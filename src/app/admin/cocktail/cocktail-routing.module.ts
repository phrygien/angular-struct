import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CIndexComponent } from './c-index/c-index.component';
import { CAddComponent } from './c-add/c-add.component';
import { CEditComponent } from './c-edit/c-edit.component';
import { CDeleteComponent } from './c-delete/c-delete.component';

const routes: Routes = [
  { path: '', component: CIndexComponent },
  { path: 'add', component: CAddComponent },
  { path: 'edit/:id', component: CEditComponent },
  { path: 'delete/:id', component: CDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
