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

  @Output() removed: EventEmitter<any> = new EventEmitter<any>();

  public image!: string;
  public alt_image = 'assets/images/image_missing.jpg';
  public faStar = faStar;
  public faTimes = faTimes;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.report.thumbnail_sq64) {
      this.image = this.report.thumbnail_sq64;
    } else {
      this.image = this.alt_image;
    }

    if (this.report.text.length > 80) {
      this.report.text = this.report.text.substring(0, 80) + '...';  
    }
  }

  saveReport() {
    const reportt: Report = {
      id: this.report.id,
      text: this.report.text,
      message_type: {
          id: this.report.message_type.id,
          name: this.report.message_type.name
      },
      thumbnail_sq64: this.report.thumbnail_sq64
    };
    this.storageService.saveReport(reportt);
  }

  removeReport() {
    this.storageService.removeReport(this.report);
    this.removed.emit();
  }
}
