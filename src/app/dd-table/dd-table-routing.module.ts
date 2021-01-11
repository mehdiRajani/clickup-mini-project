import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdTableComponent } from './dd-table.component';

const routes: Routes = [{
  path: '',
  component: DdTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdTableRoutingModule { }
