import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // Stores saved reports in a BehaviorSubject. Initialized by localStorage from key `savedReports`.
  private savedReportsSubject!: BehaviorSubject<Report[]>;

  constructor(private toastr: ToastrService) {
    // Assign current saved reports to `savedReportsSubject`
    this.savedReportsSubject = new BehaviorSubject<Report[]>(
      JSON.parse(localStorage.getItem('savedReports')!)
    );
  }

  // Return value of `savedReportsSubject`. In this case, array of saved reports.
  getSavedReports() {
    return this.savedReportsSubject.value;
  }

  // Return Subject as Observable, so that Observers can subscribe to it.
  getSavedReportsObservable(): Observable<Report[]> {
    return this.savedReportsSubject.asObservable();
  }

  // Saves the new report in localStorage.
  // In order to not override previous saved reports in localStorage, the current list is retreived.
  // After that, the newest report is pushed to that array.
  // Lastly the whole array is assigned to the `savedReports` key in localStorage.
  saveReport(report: Report) {
    // Check if `savedReports` key is present in localStorage. If not, create empty array.
    if (localStorage.getItem('savedReports') == null) {
      localStorage.setItem('savedReports', '[]');
    }

    // If saved reports exist in localStorage, reterive them.
    let currentReports = JSON.parse(localStorage.getItem('savedReports')!);

    // Iterate through saved reports and check if duplicates exist.
    // If duplicate exist, show Toast and return.
    for (let i = 0; i < currentReports.length; i++) {
      if (currentReports[i].id == report.id) {
        this.toastr.error('Meldung existiert bereits');
        return;
      }
    }

    // Push newest report to the current saved reports array.
    currentReports.push(report);

    // Save it to localStorage.
    localStorage.setItem('savedReports', JSON.stringify(currentReports));
    this.savedReportsSubject.next(currentReports);

    this.toastr.success('Meldung gespeichert')
  }
  
  // Removes given report.
  removeReport(report: Report) {
    let currentReports = JSON.parse(localStorage.getItem('savedReports')!);

    // Iterate through saved reports. Find report by id and remove it.
    for (let i = 0; i < currentReports.length; i++) {
      if (currentReports[i].id == report.id) {
        currentReports.splice(i, 1)
      }
    }

    // Save list of reports without the deleted report back to localStorage.
    localStorage.setItem('savedReports', JSON.stringify(currentReports));
    this.savedReportsSubject.next(currentReports);

    this.toastr.success('Meldung gelöscht');
  }
}
