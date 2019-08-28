import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Report } from '../shared/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  apiURL = "http://demo4504868.mockable.io/consultarInformesInveco/rest/servicio/";

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  // this.heroesUrl = "asdf";

  constructor(private http: HttpClient) { 
    this.publicarInformesInvecoPorCategorias(JSON.parse(JSON.stringify({"categorias":["Desayuno con Bancolombia","Breakfast with Bancolombia","Atardecer con Bancolombia","Observador Semanal","Informe Semanal de Mercados","Presentaciones de Investigaciones Económicas","Informe Económico Mensual","Informe Trimestral de Actualización de Proyecciones","Tabla Macroeconómicos Proyectados","Informe Anual de Proyecciones","Annual Economic Forecasts and Quarterly Updates","Reporte de Compañias","Informe Especial","Company Report","Special Report"]})));
  }

  

  // addHero (request: string): Observable<Report> {
  //   return this.http.post<Report>(this.heroesUrl, request, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }


  publicarInformesInvecoPorCategorias(request: JSON): Observable<Report> {
    return this.http.post<Report>(this.apiURL, request, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
