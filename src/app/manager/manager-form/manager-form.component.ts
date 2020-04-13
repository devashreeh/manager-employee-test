import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagerService } from '../../../services/manager.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.scss']
})
export class ManagerFormComponent implements OnInit {

  constructor(public managerService : ManagerService,public toastr: ToastrService) { }
  managerForm : FormGroup;
  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.managerForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      dateOfBirth: new FormControl('',Validators.required),
      company: new FormControl('',Validators.required),
    });
  }

  onSubmit(){
    if(this.managerForm.invalid){
      return;
    }else{
      this.managerService.createManager(this.managerForm.value).subscribe((res:any)=>{
        if(res.info.code == 200){
          this.toastr.success('Sucess','Manager created successfully!');
          this.managerForm.reset()
        }else if(res.data.isEmailExists == 1){
          this.toastr.error('Error','Manager email already exists!');
        }else{
          this.toastr.error('Error','Manager creation failed!');
        }
      })
    }
  }

}
