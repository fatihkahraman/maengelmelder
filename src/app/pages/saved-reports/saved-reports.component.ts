import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { ReportService } from 'src/app/services/report.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-saved-reports',
  templateUrl: './saved-reports.component.html',
  styleUrls: ['./saved-reports.component.scss']
})
export class SavedReportsComponent implements OnInit {
  public reports: Report[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.reports = this.storageService.getSavedReports();
  }

  updateCards() {
    this.reports = this.storageService.getSavedReports();
  }
}
