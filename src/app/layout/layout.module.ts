import { LayoutRoutes } from './layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutes,
    FormsModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
