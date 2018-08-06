import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlasqlDemoComponent } from './alasql-demo.component';

const alasqlDemoRoutes: Routes = [
  { path: 'alasql-demo', component: AlasqlDemoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(alasqlDemoRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AlasqlDemoRoutingModule { }