import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpdaService } from './httpda.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
    loginstatus: Boolean;

  constructor(private router: Router, private httpservice: HttpdaService) { }

  ngOnInit() {
      if (this.httpservice.loggedIn() === true) {
          this.loginstatus = true
      }
      else{
          this.loginstatus = false
      }
  }

  logout() {
      localStorage.removeItem('cctoken')
      this.router.navigate(['/login'])
      this.ngOnInit()
  }

}
