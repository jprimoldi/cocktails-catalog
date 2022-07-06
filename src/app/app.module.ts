import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailsListItemComponent } from './components/cocktails-list-item/cocktails-list-item.component';
import { CocktailsCatalogService } from './services/cocktails-catalog.service';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailDetailComponent,
    CocktailsListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CocktailsCatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
