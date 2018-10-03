import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpdaService } from '../httpda.service';
import {Router} from '@angular/router';

import { Networks } from '../datada';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {
  observableNetworks: Observable < any[] >
  networks: Array<string>;
  yoNets: Array<any> = [];

  constructor(private httpservice: HttpdaService,
    private _router:Router) { }

  ngOnInit() {
    this.getIt()
  }

  getIt() {
    if (this.httpservice.loggedIn() === false) {
        this._router.navigate(['/login'])
    }
    this.observableNetworks = this.httpservice.getNetworks();
    this.observableNetworks.subscribe(
      networks => this.networks = networks,
      err => this.httpservice.checkErr(err)
    );


    for (let i of this.networks) {
      this.yoNets.push(i["SNO"], i["Network"], i["Subnet ID"], i["VPC ID"]);
    }
    /*
    for (let i of this.yoNets) {
      console.log(i)
    }*/
  }

}
