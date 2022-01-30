import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Report } from 'src/app/models/report.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {
  @Input() report!: Report;
  @Input() showStar!: boolean;
  @Input() showCross!: boolean;

  // This EventEmitter calls to remove a report from the parent component's array
  @Output() remove: EventEmitter<any> = new EventEmitter();

  public image!: string;
  public altImage = 'assets/images/image_missing.jpg';

  public faStar = faStar;
  public faTimes = faTimes;

  // Inject StorageService into ReportCardComponent. Mainly used to save/remove Reports from localStorage.
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    // Check if thumbnail (image) of report is null. If not null, assign it to Member variable `image`,
    // which is used in the template.
    // console.log(this.report.thumbnail_sq64);
    if (this.report.thumbnail_sq64) {
      this.image = this.report.thumbnail_sq64;
    } else {
      this.image = this.altImage;
    }

    // Truncuate text to max 80 characters and show three dots at the end
    if (this.report.text.length > 80) {
      this.report.text = this.report.text.substring(0, 80) + '...';  
    }
  }

  // Push report into localStorage
  saveReport() {
    this.storageService.saveReport(this.report);
  }

  removeReport() {
    // Remove report from localStorage
    this.storageService.removeReport(this.report);

    // Emit event to remove report from the parent array. This causes the report to be removed from display,
    // without needing to refresh the page.
    this.remove.emit();
  }
}
