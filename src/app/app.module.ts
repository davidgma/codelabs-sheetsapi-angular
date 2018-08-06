import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AlasqlDemoRoutingModule } from './alasql-demo/alasql-demo-routing.module';
import { AlasqlDemoComponent } from './alasql-demo/alasql-demo.component';
import { PageNotFoundComponent } from './not-found.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersRoutingModule } from './orders/orders-routing.module';
import { OrderEditRoutingModule } from './order-edit/order-edit-routing.module';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about/about-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatButtonModule,
  MatTooltipModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatInputModule
  
 } from '@angular/material';
import { OrderEditComponent } from './order-edit/order-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    BrowserAnimationsModule,
    OrdersRoutingModule,
    OrderEditRoutingModule,
    AlasqlDemoRoutingModule,
    AboutRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AlasqlDemoComponent,
    PageNotFoundComponent,
    OrdersComponent,
    AboutComponent,
    OrderEditComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(
      router.config, undefined, 2));
  }

}
