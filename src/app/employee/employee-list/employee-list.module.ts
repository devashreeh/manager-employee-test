import { EmployeeListComponent } from './employee-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';

@NgModule({
  declarations: [EmployeeListComponent, DeletedialogComponent],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatTableModule,
    MatDialogModule
  ],
  entryComponents : [DeletedialogComponent],
  exports:[EmployeeListComponent]
})
export class EmployeeListModule { }
