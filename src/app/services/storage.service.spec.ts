import { async, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { Report } from '../models/report.model';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
    }).compileComponents();
    service = TestBed.inject(StorageService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a report in localStorage', () => {
    const report: Report = {
      id: 123,
      text: 'This is a mock title',
      message_type: {
          id: 321,
          name: 'Mock Category'
      },
      state: 'approved',
      thumbnail_sq64: 'null'
    }

    service.saveReport(report);

    const savedReport = JSON.parse(localStorage.getItem('savedReports')!);

    expect(savedReport[0].id).toBe(123);
  });

  it('should delete a report from localStorage', () => {
    const report: Report = {
      id: 123,
      text: 'This is a mock title',
      message_type: {
          id: 321,
          name: 'Mock Category'
      },
      state: 'approved',
      thumbnail_sq64: 'null'
    }

    service.saveReport(report);

    service.removeReport(report);

    expect(localStorage.getItem('savedReports')).toBe('[]');
  });
});
