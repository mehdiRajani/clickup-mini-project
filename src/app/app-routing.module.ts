import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'clickup-table',
  pathMatch: 'full'
},{
  path: 'clickup-table',
  loadChildren: () => import('./clickup-table/clickup-table.module').then(m => m.ClickupTableModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
