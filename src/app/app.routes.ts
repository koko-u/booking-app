import { Route } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent,
        title: 'Products | Booking App',
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        title: 'Detail | Booking App',
      },
    ],
  },
];
