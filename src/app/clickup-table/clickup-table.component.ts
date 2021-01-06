import { Component, OnInit } from '@angular/core';

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

}
