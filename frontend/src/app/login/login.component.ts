import { Component, OnInit } from '@angular/core';
import { HttpdaService } from '../httpda.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginUserData = {}

  constructor(private httpservice: HttpdaService,
    private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
      this.httpservice.login(this.loginUserData)
      .subscribe(
          res=>{
            console.log(res)
            localStorage.setItem('cctoken', res.cctoken)
            this.router.navigate(['/instances'])
          },
          err=>console.log(err)
      )
  }


  getToken() {
      return localStorage.getItem('cctoken')
  }

}
