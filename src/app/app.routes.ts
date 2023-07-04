import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ProductListComponent,
    pathMatch: 'full',
    title: 'Products | Booking App',
  },
  {
    path: 'products',
    component: ProductListComponent,
    title: 'Products | Booking App',
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    title: 'Detail | Booking App',
  },
];
