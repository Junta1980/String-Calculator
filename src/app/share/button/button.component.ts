import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn btn-info buttoncalc ml-1"
      (click)="click(buttonCalculator)"
    > {{buttonCalculator}} </button>
  `,
  styles: [`
   .buttoncalc{
    width: 15px;
    font-size: 13px;
   }
  `]
})
export class ButtonComponent {

  @Input() buttonCalculator: string;
  @Output() clickButton = new EventEmitter<string>();

  click(value: string){
    this.clickButton.emit(value)
  }

}
