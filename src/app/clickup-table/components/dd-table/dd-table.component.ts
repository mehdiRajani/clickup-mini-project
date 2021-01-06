import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dd-table',
  templateUrl: './dd-table.component.html',
  styleUrls: ['./dd-table.component.scss']
})
export class DdTableComponent implements OnInit {

  @Input() itemList: Array<any> = [];
  @Output() dragDropHandler = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.dragDropHandler.emit({previousIndex: event.previousIndex, currentIndex: event.currentIndex})
  }

}
