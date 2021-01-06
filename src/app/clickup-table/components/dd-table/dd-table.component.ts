import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interface/user.interface';
import { Observable } from 'rxjs';
import { TableHeadings } from '../../constants/clickupTable';

@Component({
  selector: 'app-dd-table',
  templateUrl: './dd-table.component.html',
  styleUrls: ['./dd-table.component.scss']
})
export class DdTableComponent implements OnInit {

  @Input() itemList: Array<User> = [];
  @Output() dragDropHandler = new EventEmitter();
  tableHeading: Array<{key: string, value: string}> = TableHeadings;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.dragDropHandler.emit({previousIndex: event.previousIndex, currentIndex: event.currentIndex})
  }

}
