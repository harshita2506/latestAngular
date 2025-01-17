import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesModule } from './recipes/recipes.module';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
