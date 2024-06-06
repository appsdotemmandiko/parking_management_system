import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotRoutingModule } from './lot-routing.module';
import { LotComponent } from './lot.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LotComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    LotRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LotModule { }
