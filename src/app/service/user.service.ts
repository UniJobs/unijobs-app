import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Response, Headers} from '@angular/http';
import {log} from "util";

@Injectable()
export class UserService {
  private userID;

  private clientId = 'trusted-client';
  private clientSecret = 'secret';
  private basicHeader = btoa(this.clientId + ':' + this.clientSecret);

  private headers = new Headers();

  private creds;

  private url = 'http://localhost:8080/api/user';
  private registeredUser : User = new User;

  constructor(public http: Http) {
    this.headers.append('Authorization', 'Basic ' + this.basicHeader);
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.creds = 'access_token=' + localStorage.getItem('token');
    this.userID = localStorage.getItem('userId');
  }

  updateCredentials(): void {
    this.creds = 'access_token=' + localStorage.getItem('token');
    this.userID = localStorage.getItem('userId');
  }

  getUser(): Observable<User> {

    this.updateCredentials();

    const getUrl = `${this.url}/getUserById?userId=${this.userID}&${this.creds}`;
    console.log(getUrl);

    return this.http.get(getUrl, {headers: this.headers})
      .map(this.extractUser)
      .catch(this.handleError);

  }

  extractUser(res: Response) {
    this.registeredUser = res.json();
    return this.registeredUser;
  }

  saveData(user: User, password:string) {
    this.registeredUser = user;
    this.registeredUser.password = password;
    log('service' + this.registeredUser.id);
  }

  getRegisteredUser() {
    return this.registeredUser;
  }

  private handleData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  create(user: User): Observable<User> {

    return this.http.post('http://localhost:8080/api/user/newUser', user).map(this.handleData).catch(this.handleError); ;
  }


  updateUser(model: User) {
    log(model.username)
    return this.http.post('http://localhost:8080/api/user/updateUser', model).map(this.handleData).catch(this.handleError);
  }


}
