import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dd-table',
  templateUrl: './dd-table.component.html',
  styleUrls: ['./dd-table.component.scss']
})
export class DdTableComponent implements OnInit {

  @Input() itemList: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
