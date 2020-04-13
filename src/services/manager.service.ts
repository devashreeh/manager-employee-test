import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiUrl} from './constant';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(public http: HttpClient) { }

  login(email,password){
    let params = new HttpParams()
    .set('email',email)
    .set('password',password);
    return this.http.get(apiUrl+'managers/login',{params:params});
  }

  createManager(data){
    return this.http.post(apiUrl+'managers/add',data);
  }

}
