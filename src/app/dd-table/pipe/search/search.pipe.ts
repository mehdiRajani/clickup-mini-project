import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../clickup-table/interface/user.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Array<any>, searchText: string, column: string): Array<User> {
    return [ ...list.filter((item) => !!item[column].toUpperCase().includes(searchText.toUpperCase()))];
  }

}
