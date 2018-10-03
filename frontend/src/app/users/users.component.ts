import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpdaService } from '../httpda.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    userDetails = {} /** New user details */
    observableUsers: Observable<any>;
    Users: Array<any>;
    eUsers = {} /** EXisting user data from the selected table */

  constructor(private http:HttpdaService, private router:Router) { }

  ngOnInit() {
      this.getUsers()
  }
  
  getUsers() {
    if (this.http.loggedIn() === false) {
        this.router.navigate(['/login'])
    }
      this.observableUsers = this.http.getUsers();
      this.observableUsers.subscribe(
          users => this.Users = users
      )
      if (this.Users['message']){
        this.router.navigate(['/login'])
    }

  }

  getTabledata(data){
    this.eUsers = data;
  }

  addUser() {
    this.http.addUser(this.userDetails).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

  editUser() {
    this.http.updateUSer(this.eUsers).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

}
