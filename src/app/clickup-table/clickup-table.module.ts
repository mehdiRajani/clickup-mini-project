import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickupTableComponent } from './clickup-table.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DdTableComponent } from './components/dd-table/dd-table.component';
import { ClickupTableRoutingModule } from './clickup-table-routing.module';



@NgModule({
  declarations: [ClickupTableComponent, DdTableComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ClickupTableRoutingModule
  ]
})
export class ClickupTableModule { }
