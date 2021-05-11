import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InputstringComponent } from './calculator/inputstring/inputstring.component';
import { HttpClientModule } from '@angular/common/http';
import { UikitModule } from './share/uikit.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    InputstringComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    UikitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
