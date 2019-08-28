import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Forms module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReportComponent } from './component/report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: InterceptorRequest,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
