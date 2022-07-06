import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';

const routes: Routes = [
  {
    path: ':id',
    component: CocktailDetailComponent
  },
  {
    path: '',
    component: CocktailsListComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
