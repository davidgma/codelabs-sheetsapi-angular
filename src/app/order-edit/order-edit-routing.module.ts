import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderEditComponent } from './order-edit.component';

const routes: Routes = [
  { path: 'edit/:id', component: OrderEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class OrderEditRoutingModule { }