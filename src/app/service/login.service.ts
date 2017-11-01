import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {User} from '../models/user.model';
import {log} from "util";

@Injectable()
export class LoginService {
  private OauthLoginEndPointUrl = 'http://localhost:8080/api/oauth/token';  // Oauth Login EndPointUrl to web API
  private OauthCheckRole = 'http://localhost:8080/api/role';
  //private OauthTeacher = 'http://localhost:8080/api/teacher/user';
  //private OauthStudent = 'http://localhost:8080/api/student/user';
  private OauthUser = 'http://localhost:8080/api/user';
  private clientId = 'trusted-client';
  private clientSecret = 'secret';
  private basicHeader = btoa(this.clientId + ':' + this.clientSecret);

  constructor(public http: Http) {}

  login(username, password): Observable<any> {

    log('login ' + username);
    log('login ' + password);

    const creds = 'grant_type=password'
      + '&username=' + username
      + '&password=' + password;

    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.basicHeader);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.OauthLoginEndPointUrl , creds, {headers: headers}).map(this.handleData)
      .catch(this.handleError);
  }


  getByUsername(username: string): Observable<User> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.basicHeader);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const creds = 'access_token=' + localStorage.getItem('token');


    const getUrl = `${this.OauthUser}/getUserByName?username=${username}&${creds}`;
    console.log(getUrl);

    return this.http.get(getUrl, {headers: headers})
      .map(this.handleData)
      .catch(this.handleError);
  }

  checkToken(accessToken): Observable<any> {
    const creds = 'access_token=' + accessToken;

    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.basicHeader);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(this.OauthCheckRole + '?' +  creds, {headers: headers}).map(this.handleData)
      .catch(this.handleError);
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

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('teacherId');
    localStorage.removeItem('studentId');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

}
