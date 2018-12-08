import { OrderHistoryComponent } from './order-history.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: OrderHistoryComponent },
];

export const OrderHistoryRoutes = RouterModule.forChild(routes);
