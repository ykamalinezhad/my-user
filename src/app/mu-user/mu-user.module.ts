import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuUserRoutingModule } from './mu-user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuUserComponent } from './mu-user.component';

@NgModule({
  imports: [
    CommonModule,
    MuUserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MuUserComponent
  ]
})
export class MuUserModule { }
