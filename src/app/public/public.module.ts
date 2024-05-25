import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    CocktailComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }