import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: OrderComponent },
];

export const OrderRoutes = RouterModule.forChild(routes);
