import { OrderRoutes } from './order.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutes
  ],
  declarations: [OrderComponent]
})
export class OrderModule { }
