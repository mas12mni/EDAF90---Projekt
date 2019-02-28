import { Component, OnInit } from '@angular/core';
import { WikiContentService } from '../wiki-content.service';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  abstract: string;
  constructor(private WikiContentSerice: WikiContentService, private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getSeleted().subscribe((country: Country) => {
      this.getAbstract(country.name);
    });
  }

  private getAbstract(name: string) {
    this.WikiContentSerice.getAbstract(name).subscribe((anything) => {
      this.abstract = JSON.stringify(anything);
    });
  }
}
