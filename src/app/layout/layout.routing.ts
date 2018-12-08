import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', component: LayoutComponent, children: [
          {path: 'category', loadChildren: './category/category.module#CategoryModule' },
          {path: 'order', loadChildren: './order/order.module#OrderModule'},
          {path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule'},
          {path: 'order-history', loadChildren: './order-history/order-history.module#OrderHistoryModule'},
          {path: 'register', loadChildren:'./register/register.module#RegisterModule'}    
  ] },
];

export const LayoutRoutes = RouterModule.forChild(routes);
