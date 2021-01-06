import { Component, OnDestroy, OnInit } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from './interface/user.interface';
import { selectUsers } from './store/clickup-table.selector';
import { getUserList } from './store/clickup-table.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-clickup-table',
  templateUrl: './clickup-table.component.html',
  styleUrls: ['./clickup-table.component.scss']
})
export class ClickupTableComponent implements OnInit, OnDestroy {

  users: Array<User> = [];
  usersClone: Array<User> = [];
  isComponentAlive = true;
 
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch( getUserList())
    this.listenToSubscriptions()
  }

  /**
   * @author Muhammad Mehdi
   * @param posEvent previous and current positon of item
   * @description Update the postion of element in the list when list is updated while drag drop
   */
  updateItemPosition(posEvent: {previousIndex: number, currentIndex: number}) {
    moveItemInArray(this.usersClone, posEvent.previousIndex, posEvent.currentIndex);
    this.users = [...this.usersClone]
  }

  /**
   * @author Muhammad Mehdi
   * @description Listen to the changes in the store
   */
  listenToSubscriptions() {
    this.store.select(selectUsers)
    .pipe(
      takeWhile(() => this.isComponentAlive)
    )
    .subscribe((users) => {
      this.users = users;
      this.usersClone = [...users];
    })
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }

}
