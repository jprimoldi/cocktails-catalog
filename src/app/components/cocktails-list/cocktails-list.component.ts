import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailsCatalogService } from 'src/app/services/cocktails-catalog.service';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
})
export class CocktailsListComponent implements OnInit {
  @Input() items?: Cocktail[];

  constructor(
    private cocktailsService: CocktailsCatalogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cocktailsService.getCocktailsList().subscribe((items) => {
      this.items = items;
    });
  }

  handleClicked(source: Cocktail) {
    this.router.navigate(['/' + source.idDrink]);
  }
}
