import {Routes} from '@angular/router';
import {OrderListComponent} from './order/order-list/order-list.component';
import {OrderDetailComponent} from './order/order-detail/order-detail.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {DesktopComponent} from './desktop/desktop.component';

export const routes: Routes = [
  {path: 'orders', loadComponent: () => OrderListComponent},
  {path: 'orders/:id', loadComponent: () => OrderDetailComponent},
  {path: 'products', loadComponent: () => ProductListComponent},
  {path: 'products/:id', loadComponent: () => ProductDetailComponent},
  {path: '', loadComponent: () => DesktopComponent},
];
