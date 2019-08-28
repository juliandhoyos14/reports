import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { ReportComponent } from './component/report/report.component';

const OPTS: ExtraOptions = {
  // enableTracing: true,
  useHash:true
};

const ROUTES: Routes = [
  { path: '', redirectTo: '/reports', pathMatch: 'full' },
  { path: 'reports', component: ReportComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, OPTS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
