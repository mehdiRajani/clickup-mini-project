import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './interface/user.interface';
import { selectUsers } from './store/clickup-table.selector';
import { getUserList } from './store/clickup-table.actions';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TableHeadings } from './constants/clickupTable';

@Component({
  selector: 'app-clickup-table',
  templateUrl: './clickup-table.component.html',
  styleUrls: ['./clickup-table.component.scss'],
})
export class ClickupTableComponent implements OnInit, OnDestroy {

  users: Array<User> = [];
  users$: Observable<Array<User>>;
  isComponentAlive = true;
  tableHeadings = TableHeadings;
  columnsToSort = ['fullName', 'email']
 
  constructor(
    private store: Store<any>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch( getUserList());
    this.users$ = this.store.select(selectUsers);
    this.listenToSubscriptions();
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
    })
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

}
