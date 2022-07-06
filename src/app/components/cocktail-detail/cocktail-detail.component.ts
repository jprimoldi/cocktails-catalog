import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from '../../models/cocktail.model';
import { CocktailsCatalogService } from '../../services/cocktails-catalog.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  source?: Cocktail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cocktailsCatalogService: CocktailsCatalogService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parameter) => {
      this.cocktailsCatalogService
        .getCocktailDetail(parameter['id'])
        .subscribe((detail) => (this.source = detail));
    });
  }

  backToList() {
    this.router.navigate(['/']);
  }
}
