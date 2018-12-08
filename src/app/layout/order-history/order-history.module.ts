import { OrderHistoryRoutes } from './order-history.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './order-history.component';

@NgModule({
  imports: [
    CommonModule,
    OrderHistoryRoutes
  ],
  declarations: [OrderHistoryComponent]
})
export class OrderHistoryModule { }
