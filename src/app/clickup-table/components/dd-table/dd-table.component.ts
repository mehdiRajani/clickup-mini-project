import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interface/user.interface';
import { SortOrder, TableHeadings } from '../../constants/clickupTable';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export interface TableHeader {
  key: string; 
  value: string; 
  direction: string;
}

@Component({
  selector: 'app-dd-table',
  templateUrl: './dd-table.component.html',
  styleUrls: ['./dd-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DdTableComponent implements OnInit {

  @Input() itemList: Array<User> = [];

  @Output() dragDropHandler = new EventEmitter();
  @Output() sortColumn = new EventEmitter();
  @Output() searchUsers = new EventEmitter();

  tableHeading: Array<TableHeader> = TableHeadings;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  sortOrder = SortOrder;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.dragDropHandler.emit({previousIndex: event.previousIndex, currentIndex: event.currentIndex})
  }
  
  sort(sortEvent: TableHeader) {
    this.tableHeading = this.tableHeading.map((heading) => {
      if (heading.key === sortEvent.key) {
        heading.direction = sortEvent.direction === this.sortOrder.ASC ? this.sortOrder.DSC : this.sortOrder.ASC 
      }
      return heading;
    }) 
    this.sortColumn.emit(sortEvent)
  }

  reload() {
    window.location.reload();
  }


}
