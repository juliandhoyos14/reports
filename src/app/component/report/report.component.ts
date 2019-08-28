import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:  [ ReportService ]
})
export class ReportComponent implements OnInit {

  articles : JSON;
  @Input() 
  requestReports = JSON.parse(JSON.stringify({"categorias":["Desayuno con Bancolombia","Breakfast with Bancolombia","Atardecer con Bancolombia","Observador Semanal","Informe Semanal de Mercados","Presentaciones de Investigaciones Económicas","Informe Económico Mensual","Informe Trimestral de Actualización de Proyecciones","Tabla Macroeconómicos Proyectados","Informe Anual de Proyecciones","Annual Economic Forecasts and Quarterly Updates","Reporte de Compañias","Informe Especial","Company Report","Special Report"]}));

  constructor(public reportService : ReportService) {

    // this.articles = JSON.parse(JSON.stringify([  
    //   {  
    //      "titulo":"Desayuno Agosto 26 -2019 (web).pdf",
    //      "autor":"Grupo Investigaciones Económicas",
    //      "sourceLink":"https://connections.grupobancolombia.com/files/basic/anonymous/api/library/d79759b7-d193-4c70-9fbd-063f6c641d89/document/3d3dc5b6-58c6-4194-8d8a-92b5e5bb2c36/media",
    //      "descripcion":"De acuerdo con el Ministerio de Minas y Energía, en julio la producción petrolera de Colombia alcanzó 868,7 kbpd, cifra que da cuenta de una reducción de 2,63% frente a los 892,2 kbpd de junio. Según medios locales, esta reducción se registró principalmente como consecuencia de los ataques perpetrados por grupos armados al oleoducto Caño Limón-Coveñas y en consecuencia debería ser entendida como una baja coyuntural. A pesar de lo anterior, esta cifra es ligeramente superior a los 860,4 kbpd de julio de 2018 y deja una producción media para el año corrido de 888,9 kbpd. Por su parte, la producción de gas natural alcanzó los 1.042 mmpcpd tras un incremento anual de 9,5%.",
    //      "fechaUltimaActualizacion":"Mon Aug 26 10:25:27 COT 2019",
    //      "categoria":"Desayuno con Bancolombia"
    //   },
    //   {  
    //      "titulo":"Desayuno Agosto 22 -2019 (web).pdf",
    //      "autor":"Grupo Investigaciones Económicas",
    //      "sourceLink":"https://connections.grupobancolombia.com/files/basic/anonymous/api/library/d79759b7-d193-4c70-9fbd-063f6c641d89/document/d21dec9a-fe8c-4f31-8048-6d598c0ade26/media",
    //      "descripcion":"De acuerdo con la última versión de la encuesta de opinión financiera de Fedesarrollo, la economía colombiana crecería 3% en 2019 y 3,25% 2020. Estas proyecciones son ligeramente inferiores a la de la encuesta previa, cuando se anticipaba 3,1% y 3,3%, respectivamente. Entretanto, las expectativas de inflación se incrementaron a 3,66%, frente a 3,50% en la medición anterior. Finalmente, la encuesta reveló una expectativa de tasa de cambio de COP3.250, COP100 por encima de la encuesta previa.",
    //      "fechaUltimaActualizacion":"Thu Aug 22 10:11:11 COT 2019",
    //      "categoria":"Desayuno con Bancolombia"
    //   },
    //   {  
    //      "titulo":"Breakfast  August 26 - 2019 (web).pdf",
    //      "autor":"Grupo Investigaciones Económicas",
    //      "sourceLink":"https://connections.grupobancolombia.com/files/basic/anonymous/api/library/d79759b7-d193-4c70-9fbd-063f6c641d89/document/90d11bec-d776-4918-b175-1a4fff2e4d45/media",
    //      "descripcion":"According to figures published by the Ministry of Mines and Energy, in July Colombian oil production stood at 868.7kbpd, down 2.63% compared to June’s 892.2 kbpd. According to local media, this reduction was mainly the result of terrorist attacks to the Caño Limón-Coveñas pipeline and should therefore be understood as a temporary loss. Despite the above, this figure is slightly higher than the 860.4 kbpd recorded in July 2018 and leaves an average production for the current year of 888.9 kbpd. On the other hand, production of natural gas reached 1,042 mmcfpd after an annual increase of 9.5%.",
    //      "fechaUltimaActualizacion":"Mon Aug 26 10:28:05 COT 2019",
    //      "categoria":"Breakfast with Bancolombia"
    //   },
    //   {  
    //      "titulo":"Breakfast  August 22 - 2019 (web).pdf",
    //      "autor":"Grupo Investigaciones Económicas",
    //      "sourceLink":"https://connections.grupobancolombia.com/files/basic/anonymous/api/library/d79759b7-d193-4c70-9fbd-063f6c641d89/document/1ce6fa3a-4e8b-4ee5-b6eb-d5b4695979f7/media",
    //      "descripcion":"According to Fedesarrollo’s latest financial opinion survey, the Colombian economy would grow 3% in 2019 and 3.25% in 2020. These projections are slightly lower than reported in the previous survey, when those figures were 3.1% and 3.3%, respectively. Meanwhile, inflation expectations increased to 3.66% from 3.50% in the previous measurement. Finally, the survey revealed an exchange rate expectation of COP3,250, COP100 above the previous survey.",
    //      "fechaUltimaActualizacion":"Thu Aug 22 10:08:40 COT 2019",
    //      "categoria":"Breakfast with Bancolombia"
    //   },
    //   {  
    //      "titulo":"Reporte mercado cambiario Colombia - 26 de Agosto.pdf",
    //      "autor":"Grupo Investigaciones Económicas",
    //      "sourceLink":"https://connections.grupobancolombia.com/files/basic/anonymous/api/library/d79759b7-d193-4c70-9fbd-063f6c641d89/document/66b19812-d74c-4482-bd5a-dd64cd1d9590/media",
    //      "descripcion":"",
    //      "fechaUltimaActualizacion":"Mon Aug 26 16:07:38 COT 2019",
    //      "categoria":"Atardecer con Bancolombia"
    //   }]));

    
   }

  ngOnInit() {
    this.consumerService(this.requestReports);
  }

  consumerService(requestReports){

    this.reportService.publicarInformesInvecoPorCategorias(this.requestReports).subscribe((data: {}) => {
      this.articles = JSON.parse(JSON.stringify(data));
    })
  }


}
