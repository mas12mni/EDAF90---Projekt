import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    const country: Country | null = JSON.parse(localStorage.getItem('country'));
    console.log('init', country);
    if (country != null) {
      // this.countryService.setSelected(country);
    }
  }
}
