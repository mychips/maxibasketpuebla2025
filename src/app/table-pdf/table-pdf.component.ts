import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Referee } from '@shared/interfaces/referee.interfaces';
import { RegRefereesService } from '../pages/reg-referees/reg-referees.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-table-pdf',
  imports: [CommonModule, RouterModule],
  templateUrl: './table-pdf.component.html',
  styleUrl: './table-pdf.component.scss'
})
export class TablePDFComponent implements OnInit {

  columns = ['#', 'Nombre', 'FNacimiento', 'lNacimiento', 'Whatsapp', 'E-mail', 'Eventos', 'Comisión'];
   
  nombreAuthor  = 'Lista de Arbitros';
  fechaNow = new Date().toLocaleDateString();
  refereesPDF: Referee[] = [];

  items: Referee[];
  constructor( private refService: RegRefereesService ) {
  }

  ngOnInit() {
    this.refService.getAllReferees().subscribe( refereesPDF => {
      this.items = refereesPDF;
      console.log(this.items);
    },
    (error: any) => {
      console.error('Error al obtener los datos: ', error);
    });
  }

  public generatePDF(): void {
    const options = {
      margin: .2,
      filename:`Lista_${new Date().toDateString()}.pdf`,
      mode: ['avoid-all', 'css', 'legacy'],
      image:{type:'jpg', quality: 0.98},
      html2canvas:{},
      jsPDF:{
        orientation:'landscape',
        unit: "in",
        format: [20, 12]
      }
    }

    const content: Element = document.querySelector("#tablePDF");
    html2pdf()
        .from(content)
        .set(options)
        .save();
  }

}