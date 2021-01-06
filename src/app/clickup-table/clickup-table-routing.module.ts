import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickupTableComponent } from './clickup-table.component';

const routes: Routes = [{
  path: '',
  component: ClickupTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickupTableRoutingModule { }
