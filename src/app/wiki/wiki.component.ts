import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  countryInfo: string;
  flagURL: string;
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getSeleted().subscribe(this.getWikiInfo.bind(this));
  }

  getWikiInfo(country: Country) {
    this.countryService.getWiki(country.name).subscribe((data1) => {
      const pageId = Object.keys(data1['query'].pages);
      this.countryInfo = data1['query'].pages[pageId].extract;
    });
    
    this.flagURL = `https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`


    //navigator.geolocation.getCurrentPosition(console.log)
  }
}
