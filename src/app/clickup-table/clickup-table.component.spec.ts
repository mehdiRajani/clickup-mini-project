import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickupTableComponent } from './clickup-table.component';

describe('ClickupTableComponent', () => {
  let component: ClickupTableComponent;
  let fixture: ComponentFixture<ClickupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
