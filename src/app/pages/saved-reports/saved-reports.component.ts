import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from 'src/app/models/report.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-saved-reports',
  templateUrl: './saved-reports.component.html',
  styleUrls: ['./saved-reports.component.scss']
})
export class SavedReportsComponent implements OnInit {
  // List of reports to be displayed as cards on the UI.
  public reports$!: Observable<Report[]>;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.initReports();
  }

  // Gets all saved reports from the savedReportsSubject, which in returns
  // gets the reports from localStorage.
  initReports() {
    // this.reports = this.storageService.getSavedReports();
    this.reports$ = this.storageService.getSavedReportsObservable();
  }
}
