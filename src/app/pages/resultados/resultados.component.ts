import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatLabel,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@Component({
  selector: 'app-resultados',
  imports: [MATERIAL_MODULES, RouterModule, CommonModule, ToolbarComponent],
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent {
  sedes = [
    {
      value: 'Instituto de Damasis',
      viewValue: 'Instituto de Damasis',
      slides: ['./assets/images/resultados/amicis/62.png'],
    },
    {
      value: 'Arena B-PRO',
      viewValue: 'Arena B-PRO',
      slides: [
        './assets/images/resultados/bpro/65.png',
        './assets/images/resultados/bpro/68.png',
        './assets/images/resultados/bpro/69.png',
        './assets/images/resultados/bpro/74.png',
        './assets/images/resultados/bpro/75.png',
        './assets/images/resultados/bpro/81.png',
        './assets/images/resultados/bpro/86.png',
        './assets/images/resultados/bpro/87.png',
        './assets/images/resultados/bpro/92.png',
        './assets/images/resultados/bpro/93.png',
      ],
    },
    {
      value: 'Gimnasio Miguel Hidalgo',
      viewValue: 'Gimnasio Miguel Hidalgo',
      slides: [
        './assets/images/resultados/miguelhidalgo/jueves/38.png',
        './assets/images/resultados/miguelhidalgo/jueves/39.png',
        './assets/images/resultados/miguelhidalgo/jueves/40.png',
        './assets/images/resultados/miguelhidalgo/jueves/41.png',
        './assets/images/resultados/miguelhidalgo/jueves/42.png',
        './assets/images/resultados/miguelhidalgo/jueves/44.png',
        './assets/images/resultados/miguelhidalgo/jueves/54.png',
        './assets/images/resultados/miguelhidalgo/jueves/55.png',
        './assets/images/resultados/miguelhidalgo/jueves/56.png',
        './assets/images/resultados/miguelhidalgo/jueves/57.png',
        './assets/images/resultados/miguelhidalgo/jueves/58.png',
        './assets/images/resultados/miguelhidalgo/jueves/60.png',
        './assets/images/resultados/miguelhidalgo/jueves/63.png',
        './assets/images/resultados/miguelhidalgo/jueves/64.png',
      ],
    },
    {
      value: 'Universidad Tecnologico de Puebla',
      viewValue: 'Universidad Tecnologico de Puebla',
      slides: [
        './assets/images/resultados/utp/jueves/7.png',
        './assets/images/resultados/utp/jueves/8.png',
        './assets/images/resultados/utp/jueves/9.png',
        './assets/images/resultados/utp/jueves/10.png',
        './assets/images/resultados/utp/jueves/11.png',
        './assets/images/resultados/utp/jueves/12.png',
        './assets/images/resultados/utp/jueves/45.png',
        './assets/images/resultados/utp/jueves/46.png',
        './assets/images/resultados/utp/jueves/47.png',
      ],
    },
    {
      value: 'Instituto Tecnologico de Puebla',
      viewValue: 'Instituto Tecnologico de Puebla',
      slides: [],
    },
    {
      value: 'Centro Escolar Morelos',
      viewValue: 'Centro Escolar Morelos',
      slides: [],
    },
    {
      value: 'Centro Escolar Niños Heroes de Chapultepec',
      viewValue: 'Centro Escolar Niños Heroes de Chapultepec',
      slides: [],
    },
    {
      value: 'UMAD 1',
      viewValue: 'UMAD 1',
      slides: [
        './assets/images/resultados/umad1/jueves/14.png',
        './assets/images/resultados/umad1/jueves/15.png',
        './assets/images/resultados/umad1/jueves/18.png',
        './assets/images/resultados/umad1/jueves/20.png',
        './assets/images/resultados/umad1/jueves/22.png',
        './assets/images/resultados/umad1/jueves/23.png',
        './assets/images/resultados/umad1/jueves/25.png',
        './assets/images/resultados/umad1/jueves/28.png',
        './assets/images/resultados/umad1/jueves/61.png',
        './assets/images/resultados/umad1/jueves/71.png',
        './assets/images/resultados/umad1/jueves/76.png',
        './assets/images/resultados/umad1/jueves/88.png',
        './assets/images/resultados/umad1/jueves/90.png',
      ],
    },
    {
      value: 'UMAD 2',
      viewValue: 'UMAD 2',
      slides: [
        './assets/images/resultados/umad2/jueves/13.png',
        './assets/images/resultados/umad2/jueves/16.png',
        './assets/images/resultados/umad2/jueves/17.png',
        './assets/images/resultados/umad2/jueves/19.png',
        './assets/images/resultados/umad2/jueves/21.png',
        './assets/images/resultados/umad2/jueves/24.png',
        './assets/images/resultados/umad2/jueves/26.png',
        './assets/images/resultados/umad2/jueves/27.png',
        './assets/images/resultados/umad2/jueves/70.png',
        './assets/images/resultados/umad2/jueves/77.png',
        './assets/images/resultados/umad2/jueves/89.png',
        './assets/images/resultados/umad2/jueves/91.png',
      ],
    },
    {
      value: 'Instituto Mexicano Madero Centro',
      viewValue: 'Instituto Mexicano Madero Centro',
      slides: [],
    },
    {
      value: 'Colegio San Angel',
      viewValue: 'Colegio San Angel',
      slides: ['./assets/images/resultados/colsanangel/46.png'],
    },
    {
      value: 'Gimnasio Cuautlancingo',
      viewValue: 'Gimnasio Cuautlancingo',
      slides: [
        './assets/images/resultados/cuautlancingo/jueves/1.png',
        './assets/images/resultados/cuautlancingo/jueves/2.png',
        './assets/images/resultados/cuautlancingo/jueves/3.png',
        './assets/images/resultados/cuautlancingo/jueves/4.png',
      ],
    },
    {
      value: 'Gimnasio Sport Plaza',
      viewValue: 'Gimnasio Sport Plaza',
      slides: [],
    },
    { value: 'Club Alpha 2', viewValue: 'Club Alpha 2', slides: [] },
    {
      value: 'Club Alpha 3',
      viewValue: 'Club Alpha 3',
      slides: ['./assets/images/resultados/alpha3/59.png'],
    },
    {
      value: 'SUTERM',
      viewValue: 'SUTERM',
      slides: [
        './assets/images/resultados/suterm/82.png',
        './assets/images/resultados/suterm/95.png',
      ],
    },
    {
      value: 'UPAEP (nido)',
      viewValue: 'UPAEP (nido)',
      slides: [
        './assets/images/resultados/upaepnido/jueves/131125_1.png',
        './assets/images/resultados/upaepnido/jueves/131125_2.png',
        './assets/images/resultados/upaepnido/jueves/33.png',
        './assets/images/resultados/upaepnido/jueves/36.png',
        './assets/images/resultados/upaepnido/jueves/50.png',
        './assets/images/resultados/upaepnido/jueves/5.png',
        './assets/images/resultados/upaepnido/jueves/6.png',
        './assets/images/resultados/upaepnido/jueves/67.png',
        './assets/images/resultados/upaepnido/jueves/72.png',
        './assets/images/resultados/upaepnido/jueves/78.png',
        './assets/images/resultados/upaepnido/jueves/80.png',
        './assets/images/resultados/upaepnido/jueves/83.png',
        './assets/images/resultados/upaepnido/jueves/84.png',
      ],
    },
    {
      value: 'UPAEP (edificio J)',
      viewValue: 'UPAEP (edificio J)',
      slides: [
        './assets/images/resultados/upaepj/jueves/29.png',
        './assets/images/resultados/upaepj/jueves/30.png',
        './assets/images/resultados/upaepj/jueves/31.png',
        './assets/images/resultados/upaepj/jueves/32.png',
        './assets/images/resultados/upaepj/jueves/34.png',
        './assets/images/resultados/upaepj/jueves/35.png',
        './assets/images/resultados/upaepj/jueves/37.png',
        './assets/images/resultados/upaepj/jueves/43.png',
        './assets/images/resultados/upaepj/jueves/48.png',
        './assets/images/resultados/upaepj/jueves/49.png',
        './assets/images/resultados/upaepj/jueves/51.png',
        './assets/images/resultados/upaepj/jueves/52.png',
        './assets/images/resultados/upaepj/jueves/53.png',
        './assets/images/resultados/upaepj/jueves/66.png',
        './assets/images/resultados/upaepj/jueves/73.png',
        './assets/images/resultados/upaepj/jueves/79.png',
        './assets/images/resultados/upaepj/jueves/85.png',
      ],
    },
    {
      value: 'UPAEP (Prepa Angelopolis)',
      viewValue: 'UPAEP (Prepa Angelopolis)',
      slides: ['./assets/images/resultados/upaepangel/94.png'],
    },
  ];

  imagenesMostradas: string[] = [];

  onSelectionChange(event: MatSelectChange): void {
    const valorSeleccionado = event.value;
    const opcionSeleccionada = this.sedes.find(
      (opcion) => opcion.value === valorSeleccionado
    );

    if (opcionSeleccionada) {
      this.imagenesMostradas = opcionSeleccionada.slides;
    } else {
      this.imagenesMostradas = [];
    }
  }
}
