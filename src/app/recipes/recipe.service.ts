import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe1',
      'This Rescipe description1',
      'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
      [
        new Ingredient('French Fries', 30),
        new Ingredient('meet', 10)
      ]),
    new Recipe('A test Recipe2',
      'This Rescipe description2',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlY2lwZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      [
        new Ingredient('Buns', 30),
        new Ingredient('banana', 20)
      ])
  ];
  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  getAddRecipeShoppingList(ingredients: Ingredient[]) {
    this.slService.addShoppingIngredient(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1)
    this.recipeChanged.next(this.recipes.slice());
  }
}
