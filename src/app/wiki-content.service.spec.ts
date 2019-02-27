import { TestBed } from '@angular/core/testing';

import { WikiContentService } from './wiki-content.service';

describe('WikiContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiContentService = TestBed.get(WikiContentService);
    expect(service).toBeTruthy();
  });
});
