import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs';
import { Country } from '../country';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  countries: Observable<Country[]>;
  selected: Country;

  constructor(public countryService: CountryService) {}

  ngOnInit() {
    this.countries = this.countryService.getCountries();
    this.countryService.getSeleted().subscribe((country: Country) => {
      this.selected = country;
    });
  }
}
