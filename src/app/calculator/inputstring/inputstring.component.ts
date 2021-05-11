import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ValidationService } from './validators';

@Component({
  selector: 'app-inputstring',
  templateUrl: './inputstring.component.html',
  styles: [`
    input.ng-dirty.ng-invalid {
      border: 1px solid red;
    }
    .row{
      max-width: 220px;
      margin: auto;
    }
    .button-left{
      margin: 3px;
    }
  `]
})
export class InputstringComponent implements OnInit {
  input: FormControl;
  eanbleValidator = false;
  @Input()
  set value(value: string) {
    if (value) {
      this.input.setValue(value);
      this.input.markAllAsTouched();
      if(this.eanbleValidator){
        this.enableAsyncValidator();
      }
    }
  }
  @Input()
  set resultValue(resultValue: number) {
    if (resultValue) {
      this.input.setValue(resultValue);
      this.input.markAsUntouched();
    }
  }
  @Output() valuecalc = new EventEmitter<boolean>();
  @Output() resetcalc = new EventEmitter<boolean>();
  inputValue = '';

  constructor(private validationService: ValidationService) {
  }

  ngOnInit(): void {
    this.input = new FormControl(null, Validators.required, this.validationService.stringValidator());
  }

  clickReset(): void {
    this.input.reset();
    this.input.markAsUntouched();
    this.resetcalc.emit(true);
  }

  clickCalc(): void {
    this.input.clearAsyncValidators();
    this.input.updateValueAndValidity();
    this.valuecalc.emit(true);
    this.eanbleValidator = true;
  }

  enableAsyncValidator(): void{
    this.input.setAsyncValidators(this.validationService.stringValidator());
    this.input.updateValueAndValidity();
    this.eanbleValidator = false;
  }
}
