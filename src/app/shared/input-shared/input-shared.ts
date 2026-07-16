import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-shared',
  imports: [],
  templateUrl: './input-shared.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputShared),
      multi: true,
    },
  ],
})
export class InputShared implements ControlValueAccessor {
  type = input<'text' | 'number'>('text');
  name = input.required<string>();

  value: string | number = '';
  disabled = false;

  onChange: (value: string | number) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string | number): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(value: string): void {
    this.value = this.type() === 'number' ? Number(value) : value;
    this.onChange(this.value);
  }
}
