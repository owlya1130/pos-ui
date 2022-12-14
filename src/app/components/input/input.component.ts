import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'pos-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() type: "text" | "number" = "text";

  @Input() label: string = "";

  @Input() placeholder: string = "";

  @Input() value: any = null;

  @Input() fontSize: string = "20px";

  @Input() inputWidth: string = "100px";

  textValue: string = "";

  numberValue: number = 0;

  onChange = (obj: any) => { };

  onTouched = () => { };

  isTouched = false;

  @Input("disabled") isDisabled = false;

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

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
