export class Cocktail {
  strDrink: string = '';
  strDrinkThumb: string = '';
  idDrink: string = '';
  strInstructions?: string;
  strIngredients?: { description: string, quantity: string }[];
}