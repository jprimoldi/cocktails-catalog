import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cocktail } from '../models/cocktail.model';
import { CocktailsListResponse } from '../models/cocktails-list-response.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailsCatalogService {
  cachedItems: Cocktail[] = [];

  constructor(private http: HttpClient) {}

  getCocktailsList() {
    if (this.cachedItems.length) {
      return of(this.cachedItems);
    }

    return this.http
      .get<CocktailsListResponse>(
        `${environment.api}filter.php?g=Cocktail_glass`
      )
      .pipe(
        map((response) => {
          this.cachedItems = response.drinks || [];
          return response.drinks;
        })
      );
  }

  getCocktailDetail(id: string): Observable<Cocktail> {
    const cachedItemIndex = this.cachedItems.findIndex(
      (item) => item.idDrink === id
    );

    if (this.cachedItems[cachedItemIndex]?.strInstructions) {
      return of(this.cachedItems[cachedItemIndex]);
    }

    return this.http
      .get<CocktailsListResponse>(`${environment.api}lookup.php?i=${id}`)
      .pipe(
        map((response) => {
          this.cachedItems[cachedItemIndex] =
            response.drinks && this.parseIngredients(response.drinks[0]);
          return this.cachedItems[cachedItemIndex];
        })
      );
  }

  parseIngredients(detail = new Cocktail()) {
    const strIngredientsKeys = Object.keys(detail)
      .filter((key) => key.startsWith('strIngredient'));

    const strIngredients: { description: string, quantity: string }[] = [];
    let index: string;

    strIngredientsKeys.forEach((key) => {
      if (detail[key as keyof Cocktail]) {
        index = (key.match(/strIngredient(\d)/) || [])[1];

        strIngredients.push({
          description: detail[key as keyof Cocktail] as string,
          quantity: detail[`strMeasure${index}` as keyof Cocktail] as string
        });
      }
    });

    detail.strIngredients = strIngredients;
    return detail;
  }
}
