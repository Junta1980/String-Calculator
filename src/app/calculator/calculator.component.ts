import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../services/buttons.services';
import { StringCalcService } from '../services/stringcalc.services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  buttons: string[];
  inputValue: string;
  resultValue: number;
  buttonValue = '';

  constructor(private buttonsService: ButtonsService , private stringCalcService: StringCalcService ) { }

  ngOnInit(): void {
    this.buttonsService.gretButtons().subscribe(
      buttons => {
       this.buttons = buttons;
      }
    );
  }

  clickButton($event: string): void{
    this.buttonValue += $event;
    this.inputValue = this.buttonValue;
  }

  calcEvent(): void{
    this.buttonValue = '';
    this.resultValue = null;
    this.stringCalcService.calcString().subscribe(
      result => this.resultValue = result.value
    );
  }

  resertcalc(): void{
    this.buttonValue = '';
  }

}
