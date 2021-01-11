import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdTableRoutingModule } from './dd-table-routing.module';
import { DdTableComponent } from './dd-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchPipe } from './pipe/search/search.pipe';
import { SortPipe } from './pipe/sort/sort.pipe';

@NgModule({
  declarations: [DdTableComponent, SearchPipe, SortPipe],
  imports: [
    CommonModule,
    DdTableRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [DdTableComponent]
})
export class DdTableModule { }
