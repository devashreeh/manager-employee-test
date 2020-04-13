import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss']
})
export class ManagerLoginComponent implements OnInit {

  constructor(public managerService : ManagerService,public toastr: ToastrService,public route: Router) { }
  loginForm : FormGroup;
  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password: new FormControl('',Validators.required),
    });
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }else{
      this.managerService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe((res:any)=>{
        if(res.info.code == 200){
          if(res.data.isMatch == 1){
            localStorage.clear();
            localStorage.setItem('managerId',res.data.id);
            this.toastr.success('Success','Login successfully!');
            this.route.navigateByUrl('/home');
            this.loginForm.reset()
          }else if(res.data.isMatch == 0){
            this.toastr.error('Error',res.data.responseMsg);
          }
        }else{
          this.toastr.error('Error','Login failed!');
        }
      })
    }
  }


}
