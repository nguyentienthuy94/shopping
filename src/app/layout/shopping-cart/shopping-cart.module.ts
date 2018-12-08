import { ShoppingCartRoutes } from './shopping-cart.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutes
  ],
  declarations: [ShoppingCartComponent]
})
export class ShoppingCartModule { }
