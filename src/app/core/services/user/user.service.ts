import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl = 'https://randomuser.me/api/?key=652W-6KGA-3HE5-9NN4&ref=1234abcd&results=25&seed=huskiesarecute'

  constructor(
    private http: HttpClient
  ) { }

  processUsers(userList) {
    const updatedList = [];
    userList.map((user, index) => {
      updatedList.push({
        Id: index + 1,
        fullName: `${user.name.first} ${user.name.last}`,
        phone:  user.cell,
        email: user.email,
        gender: user.gender
      })
    })
    return updatedList;
  }

  getUserList() {
    return this.http.get(this.apiBaseUrl)
    .pipe(
      map((response: any) => {
        const updatedUserList = this.processUsers(response.results)
        return updatedUserList;
      })
    )
  }
}
