import { Component, Input  } from '@angular/core';
import { ReportesService } from './reportesServices';

@Component({
  selector: 'app-tu-componente',
  template: `
    <button (click)="descargarPdf()">Descargar PDF</button>
  `
})
export class ReportesComponent {
  constructor(private reportesService: ReportesService) {}

  @Input() locales: any[] = [];

  descargarPdf() {
    this.reportesService.generarPdf().subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
  
}
