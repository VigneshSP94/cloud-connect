import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpdaService } from '../httpda.service';
import { Accounts } from '../datamodel';
import {Router} from '@angular/router';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
    observableAccounts: Observable<any>;
    Accounts: Accounts[];
    acdetails={};
    newaccount={};
    visibleSwitch= "visibility";

    /** List of Available AWS Endpoint and their Regions*/
    endPoints=["us-east-2", "us-east-1", "us-west-1", "us-west-2",
               "ap-south-1", "ap-northeast-3", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", 
               "ap-northeast-1", "ca-central-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-west-3",
               "sa-east-1"]

  constructor(private http:HttpdaService,
    private router: Router) { }

  ngOnInit() {
      this.getAccs();
  }

  /** This funtions gets the Accounts from the Backend server and store/represents to the users. */
  getAccs() {
    if (this.http.loggedIn() === false) {
        this.router.navigate(['/login'])
    }
      this.observableAccounts = this.http.getAccounts();
      this.observableAccounts.subscribe(
          Accounts => this.Accounts = Accounts
      )
      if (this.Accounts['message']){
          this.router.navigate(['/login'])
      }
  }

  getTabledata(data) {
      this.acdetails = data;
  }
  
  /** This funtion is used to post a new AWS account to the Backend. */
  addAcc(){
      this.http.addAcc(this.newaccount).subscribe(
          res => console.log(res),
          err => console.log(err)
      )
  }

  hideRshow() {
      if (this.visibleSwitch === "visibility") {
          this.visibleSwitch = "visibility_off";
          console.log(this.visibleSwitch)
      }
      else if (this.visibleSwitch === "visibility_off") {
          this.visibleSwitch = "visibility";
          console.log(this.visibleSwitch)
      }
  }
}
