import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit(): void {
  }

  goToEmployee(){
    this.route.navigateByUrl('/employee/employee-form');
  }

  signOut(){
    localStorage.clear();
    this.route.navigateByUrl('manager/manager-login');
  }

}
