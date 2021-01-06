import { Component, OnInit } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-clickup-table',
  templateUrl: './clickup-table.component.html',
  styleUrls: ['./clickup-table.component.scss']
})
export class ClickupTableComponent implements OnInit {

  userList = [{
    firstName: 'john',
    lastName: 'doe'
  },{
    firstName: 'john',
    lastName: 'peter'
  },{
    firstName: 'john',
    lastName: 'son'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  updateItemPosition(posEvent: {previousIndex: number, currentIndex: number}) {
    moveItemInArray(this.userList, posEvent.previousIndex, posEvent.currentIndex);
  }

}
