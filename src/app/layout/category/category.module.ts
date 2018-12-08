import { CategoryRoutes } from './category.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
