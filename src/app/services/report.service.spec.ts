import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';

import { ReportService } from './report.service';

describe('ReportService', () => {
  let service: ReportService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
    service = TestBed.inject(ReportService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
