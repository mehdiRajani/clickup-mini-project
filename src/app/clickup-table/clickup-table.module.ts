import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickupTableComponent } from './clickup-table.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DdTableComponent } from './components/dd-table/dd-table.component';
import { ClickupTableRoutingModule } from './clickup-table-routing.module';
import { StoreModule } from '@ngrx/store';
import * as ClickupTableReducer from '../clickup-table/store/clickup-table.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClickupTableEffects } from './store/clickup-table.effect';
@NgModule({
  declarations: [ClickupTableComponent, DdTableComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ClickupTableRoutingModule,
    StoreModule.forRoot({clickupState: ClickupTableReducer.reducer}),
     EffectsModule.forRoot([ClickupTableEffects])
  ]
})
export class ClickupTableModule { }
