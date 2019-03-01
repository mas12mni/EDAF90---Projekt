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
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.abstract = this.countryService.getSeleted();
  }
}
