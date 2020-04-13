import { DeletedialogComponent } from './deletedialog/deletedialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeServiceService,public router: Router,public dialog: MatDialog) { }

  managerId : number;
  employee = [];
  displayedColumns: string[] = ['empId','name','mobile','address','dateOfBirth','action'];
  isDelete : boolean = false;

  ngOnInit(): void {

    this.managerId = Number(localStorage.getItem('managerId'));
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeesList(this.managerId).subscribe((res:any)=>{
      if(res.info.code == 200){
        this.employee = res.data;
      }
    })
  }

  editEmployee(id){
    this.router.navigate(['employee/employee-form', id]);
  }

  deleteEmployee(id){
    this.isDelete = true;
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '300px',
      data:id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
