import { Component } from '@angular/core';
import { IHeaderMenuItem } from './interfaces/IHeaderMenuItem';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header {
  menu_items: IHeaderMenuItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Calculator', path: '/calculator' },
  ];
}
