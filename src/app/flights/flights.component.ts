import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { Airport } from '../Airport';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})


export class FlightsComponent implements OnInit {
  allAirports: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getSeleted().subscribe(this.getFlights.bind(this));
  }

  getFlights(country: Country): void {
    this.allAirports = [];

    this.countryService.getFlightsService(country.lat, country.lng).subscribe((flygplatser: Airport[]) => {

      flygplatser.map(flygplats => {
        var param:any = {
          airportCode: flygplats.code,
          name: flygplats.name,
          city: flygplats.city,
          lat: flygplats.location.latitude,
          lng: flygplats.location.longitude,
        };
         navigator.geolocation.getCurrentPosition(success);
        
        this.allAirports.push(param);

        console.log(this.allAirports);

        function success(pos) {
          var crd = pos.coords;

          var R = 6371e3; // metres
          var φ1 = crd.latitude * 2 * Math.PI / 360; //lat1
          var φ2 = param.lat * 2 * Math.PI / 360; //lat2
          var Δφ = (param.lat - crd.latitude)* 2 * Math.PI / 360;//lat2-lat1
          var Δλ = (param.lng - crd.longitude) * 2 * Math.PI / 360;//lng2-lng1  grader eller radianer???

          var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

          var dist = Math.floor((R * c) / 1000);
          console.log(`Avstånd från din plats är: ${dist} km`);
          param.dist = dist;
        }

      });
    });
    //Vrf blir lat & lng undefined om jag deklarerar country: Country utanför getFlights() 
    //och använder this.lat & this.lng??? Binding?
  }

}
