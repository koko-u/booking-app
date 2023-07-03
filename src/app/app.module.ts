import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductListComponent],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ProductListComponent],
})
export class AppModule {}
