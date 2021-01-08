import { Component, OnDestroy, OnInit } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { User } from './interface/user.interface';
import { selectUsers } from './store/clickup-table.selector';
import { getUserList, searchUser } from './store/clickup-table.actions';
import { debounceTime, takeWhile } from 'rxjs/operators';
import { SortPipe } from './pipe/sort/sort.pipe';
import { Observable } from 'rxjs';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-clickup-table',
  templateUrl: './clickup-table.component.html',
  styleUrls: ['./clickup-table.component.scss'],
  providers: [ SortPipe ]
})
export class ClickupTableComponent implements OnInit, OnDestroy {

  users: Array<User> = [];
  users$: Observable<Array<User>>;
  usersClone: Array<User> = [];
  isComponentAlive = true;
  faSearch = faSearch;
  searchControl = new FormControl()
  defaultColumn = 'fullName'
 
  constructor(
    private store: Store<any>,
    private sortPipe: SortPipe
  ) {}

  ngOnInit(): void {
    this.store.dispatch( getUserList());
    this.users$ = this.store.select(selectUsers);
    this.listenToSubscriptions();
    this.listenSearchChanges();
  }

  /**
   * @author Muhammad Mehdi
   * @param posEvent previous and current positon of item
   * @description Update the postion of element in the list when list is updated while drag drop
  */
  updateItemPosition(posEvent: {previousIndex: number, currentIndex: number}) {
    moveItemInArray(this.usersClone, posEvent.previousIndex, posEvent.currentIndex);
    this.users = [ ...this.usersClone]
  }

  /**
   * @author Muhammad Mehdi
   * @description Listen to the changes in the store
  */
  listenToSubscriptions() {
    this.users$
    .pipe(
      takeWhile(() => this.isComponentAlive)
    )
    .subscribe((users) => {
      this.users = users;
      this.usersClone = [ ...users];
      // this.sortUserList({direction: SortOrder.ASC , column: this.defaultColumn})
    })
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
      debounceTime(500)
    )
    .subscribe((searchText: string) => {
      this.store.dispatch(searchUser({searchText, column: this.defaultColumn}))
    })
  }

  /**
   * @author Muhammad Mehdi
   * @description Sort ASC or DSC order
   */
  sortUserList(sortEvent: { direction: string, key: string }) {
    const { direction, key } = sortEvent;
    this.users = [...this.sortPipe.transform([...this.users], direction, key )]
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

}
