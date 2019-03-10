import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})


export class FlightsComponent implements OnInit {
  country: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getSeleted().subscribe(this.getFlights.bind(this));
  }

  getFlights() {
    this.countryService.getFlightsService();
  }


}
