import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleComponent } from './google.component';

const routes: Routes = [
  { path: 'google', component: GoogleComponent }
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
export class GoogleRoutingModule { }