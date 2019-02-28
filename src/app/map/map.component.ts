import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  country: Country;

  constructor(private route: ActivatedRoute, private countryService: CountryService) {}
  ngOnInit() {
    const countryName: string | null = this.route.snapshot.paramMap.get('name');
    if (countryName != null) {
      this.countryService.getCountry(countryName);
    }
    this.countryService.getSeleted().subscribe((country: Country) => {
      this.country = country;
    });
  }
}
