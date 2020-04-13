import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerFormRoutingModule } from './manager-form-routing.module';
import { ManagerFormComponent} from './manager-form.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManagerFormComponent],
  imports: [
    CommonModule,
    ManagerFormRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class ManagerFormModule { }
