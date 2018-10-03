import { TestBed, inject } from '@angular/core/testing';

import { HttpdaService } from './httpda.service';

describe('HttpdaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpdaService]
    });
  });

  it('should be created', inject([HttpdaService], (service: HttpdaService) => {
    expect(service).toBeTruthy();
  }));
});
