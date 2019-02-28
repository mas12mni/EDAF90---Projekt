import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs';
import { Country } from '../country';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  countries: Observable<Country[]>;

  constructor(public countryService: CountryService) {}

  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }
}
