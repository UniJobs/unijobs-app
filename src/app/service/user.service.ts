import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class UserService {

  private api = 'localhost:5000/api';

  constructor(public http:Http) {

  }


}
