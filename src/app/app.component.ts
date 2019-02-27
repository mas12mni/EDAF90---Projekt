import { Component } from '@angular/core';
import countries from './countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'world-explorer';
  countries: string[] = countries;
}
