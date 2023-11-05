import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'child1',
    pathMatch: 'full'
  },
  {
    path: 'child1',
    component: Child1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo1RoutingModule {}
