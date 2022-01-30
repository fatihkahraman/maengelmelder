import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { Report } from 'src/app/models/report.model';

import { ReportCardComponent } from './report-card.component';

describe('ReportCardComponent', () => {
  let component: ReportCardComponent;
  let fixture: ComponentFixture<ReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      declarations: [ ReportCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCardComponent);
    component = fixture.componentInstance;
    component.report = {
      id: 123,
      text: 'This is a mock title',
      message_type: {
          id: 321,
          name: 'Mock Category'
      },
      state: 'approved',
      thumbnail_sq64: 'null'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
