import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from 'src/app/clickup-table/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  apiBaseUrl = 'https://randomuser.me/api/?key=652W-6KGA-3HE5-9NN4&ref=1234abcd&results=1000&seed=huskiesarecute'

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

    return this.sortAscending([...updatedList], 'fullName' );
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
  
  sortAscending(items: Array<User>, column: string) {
    return [ ...items.sort(function(a:any,b:any){
      if (a[column].toUpperCase() < b[column].toUpperCase()) return -1;
    })]
  }
}
