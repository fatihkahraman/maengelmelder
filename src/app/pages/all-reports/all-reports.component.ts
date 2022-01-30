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
  // List of reports to be displayed as cards on the UI.
  public reports: Report[] = [];

  public faSync = faSync;

  // Inject ReportService into AllReportsComponent. Used to request all reports from the API.
  constructor(private reportsService: ReportService) { }

  ngOnInit(): void {
    this.initReports();
  }

  // GET request to receive all reports.
  // Save received reports in Member variable `reports`.
  initReports() {
    this.reportsService.getReports().subscribe(
      (response) => {
        // Check if request was successful. If true, assign it to `reports`.
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

  // Calls the initReports() method to re-initialize Member variable `reports`.
  refreshReports() {
    // Temporarily sets the array to be empty. This has the effect of clearing all cards
    // to enhance the impression of the cards refreshing.
    this.reports = [];

    this.initReports();
  }
}
