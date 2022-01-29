import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllReportsComponent } from './pages/all-reports/all-reports.component';
import { SavedReportsComponent } from './pages/saved-reports/saved-reports.component';
import { ReportCardComponent } from './components/report-card/report-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllReportsComponent,
    SavedReportsComponent,
    ReportCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
