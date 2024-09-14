import { TestBed } from '@angular/core/testing';

import { MaarisService } from './maaris.service';

describe('MaarisService', () => {
  let service: MaarisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaarisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
