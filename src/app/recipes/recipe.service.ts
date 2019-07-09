import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test.', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('A Another Recipe', 'This is simply another test.', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
      ];

      getRecipe(){
          return this.recipes.slice();
      }
}