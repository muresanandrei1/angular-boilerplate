import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
  ],
  exports: [
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
  ]
})

export class CustomMaterialModule { }
