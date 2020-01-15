import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { RecipeListComponent } from './reciepes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './reciepes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './reciepes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ReciepesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
