import { Component, inject } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss'
})
export class RulesComponent {

  private readonly _modalSvc = inject(ModalService);
}
