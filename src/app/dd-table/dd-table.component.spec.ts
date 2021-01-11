import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdTableComponent } from './dd-table.component';

describe('DdTableComponent', () => {
  let component: DdTableComponent;
  let fixture: ComponentFixture<DdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
