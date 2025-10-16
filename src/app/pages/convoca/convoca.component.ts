import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-convoca',
  standalone: true,
  imports: [CommonModule, RouterModule, PdfViewerModule],
  templateUrl: './convoca.component.html',
  styleUrl: './convoca.component.scss'
})
export class ConvocaComponent {
}
