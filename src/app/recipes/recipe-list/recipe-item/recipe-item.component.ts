import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<string>();
  // constructor() { }

  // ngOnInit() {
  // }
  // OnSelected() {
  //   this.recipeSelected.emit();
  // }

  //Using Service

  @Input() recipe: Recipe;
  @Input() index: number;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }
  // OnSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
