import { EmployeeModule } from './employee/employee.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from "@angular/common";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlatformModule} from '@angular/cdk/platform';
import { ObserversModule} from '@angular/cdk/observers';
import { PortalModule} from '@angular/cdk/portal';
import { LayoutModule} from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ManagerModule} from './manager/manager.module';
import { HomeModule } from './home/home.module';
import { ManagerService } from '../services/manager.service';
import { EmployeeServiceService } from '../services/employee-service.service';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
 

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    EmployeeModule,
    PlatformModule,
    ObserversModule,
    PortalModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ManagerModule,
    HttpClientModule,
    MatDialogModule,
    ToastrModule.forRoot()
  ],
  providers: [ManagerService,EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
