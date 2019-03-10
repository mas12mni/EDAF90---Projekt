import { TestBed } from '@angular/core/testing';

import { WeatherserviceService } from './weatherservice.service';

describe('WeatherserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherserviceService = TestBed.get(WeatherserviceService);
    expect(service).toBeTruthy();
  });
});
