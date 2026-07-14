import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-default-layout',
  imports: [RouterOutlet, Header],
  templateUrl: './default-layout.html',
})
export class DefaultLayout {
  protected readonly currentYear = new Date().getFullYear();
}
