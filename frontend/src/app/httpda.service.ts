import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class HttpdaService {
  serverUrl = 'http://summa-dev.today/';


  constructor( private http: Http, private httpC:HttpClient,
    private _router:Router) { }

  getNetworks(): Observable<any> {
    return this.httpC.get<any>(this.serverUrl + 'networks')
  }

  getInstances(): Observable<any[]> {
    return this.httpC.get<any>(this.serverUrl + 'instances')
}
  
  insControls(instancelist:Array<string>, action): Observable<any[]>{
    return this.httpC.post<any>(this.serverUrl + 'instances/control', {"instance_id":instancelist, "action":action}).map(this.extractData)
  }


  login(user){
      return this.http.post(this.serverUrl+'login', user).map(this.extractData)
  }

  getToken() {
    return localStorage.getItem('cctoken')
  }

  loggedIn() {
    return !!localStorage.getItem('cctoken')
  }

  getAccounts() {
    return this.httpC.get<any>(this.serverUrl+ 'accounts')
}

  getUsers() {
    return this.httpC.get<any>(this.serverUrl+ 'get_users')
  }

  addAcc(accdet) {
      return this.httpC.post<any>(this.serverUrl+ 'add_aws_acc', accdet)
  }

  addUser(userdet) {
    return this.httpC.post<any>(this.serverUrl+ 'add_user', userdet)
  }

  updateUSer(userdet) {
    return this.httpC.post<any>(this.serverUrl+ 'edit_user', userdet)

  }
  
  checkErr(err) {
      if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
              this._router.navigate(['/login'])
              localStorage.removeItem('cctoken')
          }
      }
  }


  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
