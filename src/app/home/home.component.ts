import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalHomeComponent } from '@components/modal-home/modal-home.component';
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { ImageSliderComponent } from '@shared/image-slider/image-slider.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ToolbarComponent,
    //ImageSliderComponent,
    MATERIAL_MODULES,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _dialog = inject(MatDialog);

  private readonly _modalSvc = inject(ModalService);

  ngOnInit(): void {
    //    this._dialog.open(ModalHomeComponent, {
    //      width: '600px'
    //    })
    //    .afterClosed().subscribe(() => {
    //      console.log('The dialog was closed');
    //    });
  }

  onClickNewUser(): void {
    this._modalSvc.openModal<ModalComponent>(ModalComponent);
  }

  // slides: any[] = [
  //  {
  //    url: '/assets/images/anuncioImportante2.jpg',
  //    title: '5',
  //    description: '5',
  //  },
  //  {
  //    url: './assets/images/logo_fimba_page.png',
  //    title: '1',
  //    description: '1',
  //  },
  //  {
  //    url: '/assets/images/log_fimba2.png',
  //    title: '2',
  //    description: '2',
  //  },
  //  {
  //    url: '/assets/images/maxibasketPuebla.jpg',
  //    title: '3',
  //    description: '3',
  //  },
  //  {
  //    url: '/assets/images/balonFimba.png',
  //    title: '4',
  //    description: '4',
  //  },
  //  {
  //    url: '/assets/images/knicks.jpg',
  //    title: '6',
  //    description: '6',
  //  }
  //  ];
}
