import { RegisterRoutes } from './register.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RegisterRoutes,
    FormsModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
