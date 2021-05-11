import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UikitModule { }
