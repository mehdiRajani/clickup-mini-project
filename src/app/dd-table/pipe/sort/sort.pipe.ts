import { Pipe, PipeTransform } from '@angular/core';
import { SortOrder } from 'src/app/clickup-table/constants/clickupTable';
import { User } from 'src/app/clickup-table/interface/user.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: Array<User>, direction: string, column: string): Array<User> {
    const sortedItems = direction === SortOrder.ASC ?
    this.sortAscending(items,column):
    this.sortDescending(items,column)
    return sortedItems;
  }

  sortAscending(items: Array<User>, column: string) {
    return [ ...items.sort(function(a:any,b:any){
      if (a[column].toUpperCase() < b[column].toUpperCase()) return -1;
    })]
  }
  sortDescending(items: Array<User>, column: string) {
    return [ ...items.sort(function(a:any,b:any) {
      if (a[column].toUpperCase() > b[column].toUpperCase()) return -1;
    })]
  }
}

