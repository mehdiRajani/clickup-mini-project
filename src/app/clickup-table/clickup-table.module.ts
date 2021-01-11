import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickupTableComponent } from './clickup-table.component';
import { ClickupTableRoutingModule } from './clickup-table-routing.module';
import { StoreModule } from '@ngrx/store';
import * as ClickupTableReducer from '../clickup-table/store/clickup-table.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClickupTableEffects } from './store/clickup-table.effect';
import { DdTableModule } from '../dd-table/dd-table.module';

@NgModule({
  declarations: [ClickupTableComponent],
  imports: [
  CommonModule,
    ClickupTableRoutingModule,
    StoreModule.forRoot({clickupState: ClickupTableReducer.reducer}),
    EffectsModule.forRoot([ClickupTableEffects]),
    DdTableModule
  ]
})
export class ClickupTableModule { }
