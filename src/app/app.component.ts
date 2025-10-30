import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ModalComponent } from '@components/modal/modal.component';
import { ModalService } from '@components/modal/modal.service';
import { ImageSliderComponent } from '@shared/image-slider/image-slider.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatProgressSpinnerModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MATERIAL_MODULES, RouterOutlet, ToolbarComponent, ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _modalSvc = inject(ModalService);

  onClickNewUser(): void {
    this._modalSvc.openModal<ModalComponent>(ModalComponent)
  }

    slides: any[] = [
    {
      url: '/assets/images/anuncioImportante2.jpg',
      title: '5',
      description: '5',
    },
    {
      url: './assets/images/logo_fimba_page.png',
      title: '1',
      description: '1',
    },
    {
      url: '/assets/images/log_fimba2.png',
      title: '2',
      description: '2',
    },
    {
      url: '/assets/images/maxibasketPuebla.jpg',
      title: '3',
      description: '3',
    },
    {
      url: '/assets/images/balonFimba.png',
      title: '4',
      description: '4',
    },
    //{
    //  url: '/assets/images/knicks.jpg',
    //  title: '6',
    //  description: '6',
    //}
  ];
}
