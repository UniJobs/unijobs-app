import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Http} from '@angular/http';

@Injectable()
export class UserService {

  private api = 'localhost:8080/api';

  constructor(public http: Http) {

  }

  create(user: User) {
    return this.http.post('/users/register', user);
  }


}
