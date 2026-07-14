import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-shared',
  imports: [],
  templateUrl: './btn-shared.html',
})
export class BtnShared {
  label: string = 'Button';
  className: 'btn--danger' | null = null;
}
