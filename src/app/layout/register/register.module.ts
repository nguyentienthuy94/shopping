import { RegisterRoutes } from './register.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutes
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
