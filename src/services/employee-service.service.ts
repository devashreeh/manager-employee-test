import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiUrl} from './constant';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(public http: HttpClient) { }

  getEmployeesList(id){
    return this.http.get(apiUrl + 'employees/list/'+id);
  }

  createEmployee(data){
    return this.http.post(apiUrl + 'employees/add/',data);
  }

  detailsById(employeeId){
    return this.http.get(apiUrl + 'employees/listById/'+employeeId);
  }
  
  updateEmployee(id,data){
    return this.http.post(apiUrl + 'employees/modify/'+id,data);
  }

}
