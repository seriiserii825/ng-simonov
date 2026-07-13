import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorComponent } from './components/color-component/color-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ng-simonov');
}
