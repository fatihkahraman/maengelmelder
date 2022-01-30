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
  // Base url of the API is stored in the environment file.
  private readonly baseUrl = environment.apiUrl;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  // Inject HttpClient. Used to make HTTP requests.
  constructor(private http: HttpClient) { }

  // GET request to retreive all reports.
  // Returns an Observable, so that Observers can subscribe.
  getReports(): Observable<Response<Report[]>> {
    return this.http.get<Response<Report[]>>(
      this.baseUrl + 'domain/32/message?sort=-created&fields=id,title,text,state,thumbnail_sq64,responsible,message_type&style=default',
      this.httpOptions
    );
  }
}
