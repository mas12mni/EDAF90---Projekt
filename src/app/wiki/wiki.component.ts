import { Component, OnInit } from '@angular/core';
import {WikiContentService} from '../wiki-content.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  abstract: string;
  constructor(private WikiContentSerice: WikiContentService) { }
  
  ngOnInit() {
    this.WikiContentSerice.getAbstract().subscribe((anything) => {
      this.abstract = JSON.stringify(anything);
    });
  }

}
