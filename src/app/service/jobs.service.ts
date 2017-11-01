import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {User} from '../models/user.model';
import {log} from "util";
import {Job} from "../models/job.model";

@Injectable()
export class JobsService {

  constructor(public http: Http) {
  }


  private url = 'http://localhost:8080/api/job';

  public getJobs(): Observable<Job[]> {
    const creds = 'access_token=' + localStorage.getItem('token');
    const getUrl = `${this.url}/jobs?${creds}`;
    return this.http.get(getUrl).map(this.handleData).catch(this.handleError)
  }

  private handleData(res: Response) {
    const body = res.json().jobs;
    return body;
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
