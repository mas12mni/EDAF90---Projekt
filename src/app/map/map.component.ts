import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  country: Country;
  coord: number[];

  constructor(private countryService: CountryService) {}
  ngOnInit() {
    this.countryService.getSeleted().subscribe((country: Country) => {
      this.country = country;
      this.coord = [country.lng, country.lat];
    });
  }
}
