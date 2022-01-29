import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { ReportService } from 'src/app/services/report.service';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent implements OnInit {
  public reports: Report[] = [];

  public faSync = faSync;

  constructor(private reportsService: ReportService) { }

  ngOnInit(): void {
    this.initReports();
  }

  initReports() {
    this.reportsService.getReports().subscribe(
      (response) => {
        if (response.success) {
          this.reports = response.data;
        } else {
          console.error('Something went wrong.')
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  refreshReports() {
    this.reports = [];
    this.initReports();
  }
}
