import { Component, OnInit } from '@angular/core';
import { HttpdaService } from '../httpda.service';
import {Router} from '@angular/router';
import {Instances } from '../datamodel'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css']
})

export class InstancesComponent implements OnInit {
  observableInstances: Observable<any[]>;
  instances: Instances[];
  action_instances: Array<any> = [];
  table_data;
  obsInsControl: Observable<any[]>;
  wtf: any;
  action = ''
  Ac_filter = ''
  In_filter = ''


  constructor(private httpservice: HttpdaService,
    private _router:Router) { }

  ngOnInit() {
    this.getIns();
  }

  getIns() {
    if (this.httpservice.loggedIn() === false) {
        this._router.navigate(['/login'])
    }
    this.observableInstances = this.httpservice.getInstances();
    this.observableInstances.subscribe(
     instances  => this.instances = instances,
     err => this.httpservice.checkErr(err)
    );
  }

  controlIns() {
    this.obsInsControl = this.httpservice.insControls(this.action_instances, this.action);
    this.obsInsControl.subscribe(
    wtf => this.wtf = wtf

    );
  }

  onSelect() {
    // We get the table data from the html and find if the checkbox is active.
    // The rows of the tables can be accessed by "rows" object and cells can be accessed using "cells" object.
    this.table_data = document.getElementById('instance_table');
    // this.checkbool = <HTMLInputElement>this.table_data.rows[1].cells[0]
    // console.log(this.checkbool.checked)
    /**if (this.table_data.rows[1].cells[0].children[0].checked){
      console.log("it is checked")
    }

    else{
      console.log("It isn't checked")
    }*/

    for (let i = 1, row; row = this.table_data.rows[i]; i++) {
      // console.log(row.cells[2][1])
      if (i === this.table_data.rows.length) {
        break;
      }
      if (row.cells[0].children[0].checked) {
        // this.ins = row.cells[3]["innerText"]
        // this.action_instances.push(this.ins)
        this.action_instances.push(row.cells[3]['innerText']);

      }
      }
    console.log(this.action_instances);
    this.controlIns();
    this.action_instances = []
    }

    filterit() {
        console.log(this.Ac_filter);
    }

/** 
  filters() {
    this.div = document.getElementById('filters');
    this.div.insertAdjacentHTML('beforeend', '<label class="mr-2" for="req_type">Request Type</label>' +
    '<select class="mr-2" id="req_type" name="type">' +
      '<option>Account</option>' +
      '<option>Network</option>' +
      '<option>VPC</option>' +
      '<option>InstanceType</option>' +
    '</select>' +
    '<label class="mr-2" for="operator">is</label>' +
    '<select id="operator" name="is">' +
      '<option>Equals</option>' +
      '<option>Not Equals</option>' +
      '<option>Begins with</option>' +
      '<option>Ends with</option>' +
    '</select>' +
    '<label class="mr-2 ml-2" for="Value">to</label>' +
    '<input [(ngModel)]="f_value" class="mr-2" name="Value"></input>' +
    '<button class=" btn btn-sm mr-2" (click)="filterit()" class="btn btn-small">Apply</button><br>'
  );
  }
}

*/
}

