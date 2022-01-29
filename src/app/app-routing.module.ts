import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReportsComponent } from './pages/all-reports/all-reports.component';
import { SavedReportsComponent } from './pages/saved-reports/saved-reports.component';

const routes: Routes = [
  { path: '', component: AllReportsComponent },
  { path: 'saved', component: SavedReportsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
