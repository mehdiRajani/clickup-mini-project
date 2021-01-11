import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { OnChanges, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faArrowUp, faArrowDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, takeWhile, filter } from 'rxjs/operators';
import { SortOrder } from '../clickup-table/constants/clickupTable';
import { User } from '../clickup-table/interface/user.interface';
import { SearchPipe } from './pipe/search/search.pipe';
import { SortPipe } from './pipe/sort/sort.pipe';

@Component({
  selector: 'app-dd-table',
  templateUrl: './dd-table.component.html',
  styleUrls: ['./dd-table.component.scss'],
  providers: [ SortPipe, SearchPipe ]
})
export class DdTableComponent implements OnInit, OnDestroy, OnChanges {

  @Input() itemList: Array<User> = [];
  @Input() tableHeadings: Array<any> = [];
  @Input() columnToSearch: string = 'fullName';
  @Input() columnsToSort: Array<string> = [];

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  sortOrder = SortOrder;
  faSearch = faSearch;
  searchControl = new FormControl();
  isComponentAlive = true;
  allItemsList = [];

  constructor(
    private sortPipe: SortPipe,
    private searchPipe: SearchPipe
  ) { }

  ngOnInit(): void {
    this.listenSearchChanges();
  }

  ngOnChanges() {
    this.allItemsList =  [ ...this.itemList];
  }
  
  sort(sortEvent: any) {
    if (!this.columnsToSort.includes(sortEvent.key)) {
      return;
    }
    this.tableHeadings = this.tableHeadings.map((heading) => {
      if (heading.key === sortEvent.key) {
        heading.direction = sortEvent.direction === this.sortOrder.ASC ? this.sortOrder.DSC : this.sortOrder.ASC;
        sortEvent.direction = heading.direction
        return heading; 
      }
      heading.direction = '';
      return heading;
    }) 
    this.sortUserList(sortEvent)
  }

  reload() {
    window.location.reload();
  }

  /**
   * @author Muhammad Mehdi
   * @description Listen to the changes in the search textbox with some delay
   */
  listenSearchChanges() {
    this.searchControl
    .valueChanges
    .pipe(
      takeWhile(() => this.isComponentAlive),
      debounceTime(500),
      filter((searchText: string) => {
        if (searchText.length) {
          return true;
        }
        this.itemList = [ ...this.allItemsList];
        return false;
      })
    )
    .subscribe((searchText: string) => {
      this.itemList =  this.searchPipe.transform(this.allItemsList, searchText, this.columnToSearch)
    })
  }

  /**
   * @author Muhammad Mehdi
   * @description Sort ASC or DSC order
   */
  sortUserList(sortEvent: { direction: string, key: string }) {
    const { direction, key } = sortEvent;
    this.itemList = [...this.sortPipe.transform([...this.itemList], direction, key )]
  }

  dropColumn(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tableHeadings, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

}
