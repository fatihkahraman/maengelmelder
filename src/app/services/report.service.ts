import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private readonly baseUrl = environment.apiUrl;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getReports(): Observable<Response<Report[]>> {
    return this.http.get<Response<Report[]>>(
      this.baseUrl + 'domain/32/message?sort=-created&fields=id,title,text,thumbnail_sq64,responsible,message_type&style=default',
      this.httpOptions
    );
  }
}
