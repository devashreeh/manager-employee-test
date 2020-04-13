import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public route: Router,public employeeService: EmployeeServiceService,public toastr: ToastrService, private activatedRoute: ActivatedRoute) { }
  employeeForm : FormGroup;
  managerId = Number(localStorage.getItem('managerId'));
  empId : number;
  isEdit : boolean = false;
  setText : string = 'CREATE';

  ngOnInit(): void {
    this.setForm();
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) { 
        this.empId = params['id'];
        this.getEmployeesData();
        this.isEdit = true;
        this.setText = 'UPDATE';
      }
    });
  }

  setForm(){
    this.employeeForm = new FormGroup({
      empId: new FormControl('',Validators.required),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      dateOfBirth: new FormControl('',Validators.required),
      mobile: new FormControl('',Validators.required),
    });
  }

  onSubmit(){
    if(!this.isEdit){
      if(this.employeeForm.invalid){
        return;
      }else{
        let data ={
          empId: this.employeeForm.value.empId,
          firstName: this.employeeForm.value.firstName,
          lastName: this.employeeForm.value.lastName,
          address: this.employeeForm.value.address,
          dateOfBirth: this.employeeForm.value.dateOfBirth,
          mobile: this.employeeForm.value.mobile,
          managerId : this.managerId
        }
        this.employeeService.createEmployee(data).subscribe((res:any)=>{
          if(res.info.code == 200){
            this.toastr.success('Sucess','Employee created successfully!');
            this.route.navigateByUrl('/home');
            this.employeeForm.reset()
          }else{
            this.toastr.error('Error','Employee creation failed !');
          }
        })
      }
    }else{
      if(this.employeeForm.invalid){
        return;
      }else{
        let data ={
          empId: this.employeeForm.value.empId,
          firstName: this.employeeForm.value.firstName,
          lastName: this.employeeForm.value.lastName,
          address: this.employeeForm.value.address,
          dateOfBirth: this.employeeForm.value.dateOfBirth,
          mobile: this.employeeForm.value.mobile
        }
        this.employeeService.updateEmployee(Number(this.empId),data).subscribe((res:any)=>{
          if(res.info.code == 200){
            this.toastr.success('Sucess','Employee updated successfully!');
            this.route.navigateByUrl('/home');
            this.employeeForm.reset()
          }else{
            this.toastr.error('Error','Employee updation failed !');
          }
        })
      }
    }
  }

  getEmployeesData(){
    this.employeeService.detailsById(this.empId).subscribe((res:any)=>{
      if(res.info.code == 200){
        this.employeeForm.patchValue({
          empId: res.data[0].empId,
          firstName: res.data[0].firstName,
          lastName:res.data[0].lastName,
          address: res.data[0].address,
          dateOfBirth: res.data[0].dateOfBirth,
          mobile: res.data[0].mobile
        })
      }else{
        this.toastr.error('Error','Employee details fetching failed !');
      }
    })
  }

}
