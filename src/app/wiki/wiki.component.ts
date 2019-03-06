import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  abstract: Observable<Country>;
  countryInfo: string;
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.abstract = this.countryService.getSeleted();
  }

  getWikiInfo() {
    this.countryService.getWiki().subscribe((data1) => {
      const pageId = Object.keys(data1['query'].pages);
      console.log(data1['query'].pages[pageId]);
      this.countryInfo = data1['query'].pages[pageId].extract;
    });
  }
}
