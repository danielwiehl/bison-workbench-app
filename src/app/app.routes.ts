import {Routes} from '@angular/router';
import {OrderListComponent} from './order/order-list/order-list.component';
import {OrderDetailComponent} from './order/order-detail/order-detail.component';
import {DesktopComponent} from './desktop/desktop.component';

export const routes: Routes = [
  {path: 'orders', loadComponent: () => OrderListComponent},
  {path: 'orders/:id', loadComponent: () => OrderDetailComponent},
  {path: '', loadComponent: () => DesktopComponent},
];
