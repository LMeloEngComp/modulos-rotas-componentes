import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './modulo1/child1/child1.component';
import { Child2Component } from './modulo2/child2/child2.component';

const routes: Routes = [
  {
    path: 'modulo1',
    loadChildren: () => import('./modulo1/modulo1.module').then((m) => m.Modulo1Module),
  },
  {
    path: 'open-child1',
    component: Child1Component,
  },
  {
    path: 'modulo2',
    loadChildren: () => import('./modulo2/modulo2.module').then((m) => m.Modulo2Module),
  },
  {
    path: 'open-child2',
    component: Child2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
