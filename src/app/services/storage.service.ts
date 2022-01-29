import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private savedReportsSubject!: BehaviorSubject<Report[]>;

  constructor(private toastr: ToastrService) {
    this.savedReportsSubject = new BehaviorSubject<Report[]>(
      JSON.parse(localStorage.getItem('savedReports')!)
    );
  }

  getSavedReports() {
    return this.savedReportsSubject.value;
  }

  saveReport(report: Report) {
    if (localStorage.getItem('savedReports') == null) {
      localStorage.setItem('savedReports', '[]');
    }

    let currentReports = JSON.parse(localStorage.getItem('savedReports')!);

    for (let i = 0; i < currentReports.length; i++) {
      if (currentReports[i].id == report.id) {
        this.toastr.error('Meldung existiert bereits');
        return;
      }
    }

    currentReports.push(report);

    localStorage.setItem('savedReports', JSON.stringify(currentReports));
    this.savedReportsSubject.next(currentReports);

    this.toastr.success('Meldung gespeichert')
  }
  
  removeReport(report: Report) {
    let currentReports = JSON.parse(localStorage.getItem('savedReports')!);
    for (let i = 0; i < currentReports.length; i++) {
      if (currentReports[i].id == report.id) {
        currentReports.splice(i, 1)
      }
    }

    localStorage.setItem('savedReports', JSON.stringify(currentReports));
    this.savedReportsSubject.next(currentReports);

    this.toastr.success('Meldung gelöscht');
  }
}
