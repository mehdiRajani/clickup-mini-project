import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as ClickupTableActions from './clickup-table.actions';
import { UserService } from '../../core/services/user/user.service';
import { User } from '../interface/user.interface';

@Injectable()
export class ClickupTableEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClickupTableActions.getUserList),
      exhaustMap(action =>
        this.userService.getUserList()
        .pipe(
          map((user: Array<User>) => ClickupTableActions.getUserListSuccess({users: user}))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}