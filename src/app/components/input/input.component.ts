import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pos-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() type: "text" | "number" = "text";

  @Input() label: string = "";

  @Input() placeholder: string = "";

  @Input() value: any;

  @Input() fontSize: string = "20px";

  textValue: string = "";

  numberValue: number = 0;

  onChange = (obj: any) => { };

  onTouched = () => { };

  isTouched = false;

  isDisabled = false;

  constructor() { }

  ngOnInit(): void {
    this.writeValue(this.value);
  }

  writeValue(value: any): void {
    switch (this.type) {
      case "number": {
        if (isNaN(value)) throw new Error(`'${value}' is not a number!!!`);
        else this.numberValue = value;
        break;
      }
      default: {
        this.textValue = value;
        break;
      }
    }
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
