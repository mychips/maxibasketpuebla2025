import { ApplicationModule, Component, inject } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [MatCardModule, MatProgressSpinnerModule]

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ToolbarComponent, RouterModule, MATERIAL_MODULES, ApplicationModule],
  template: `
  <app-toolbar (onNewUserEvent)="onClickNewUser()"/>
  `,
  styles: ``
})
export class UserComponent {

  private readonly _modalSvc = inject(ModalService);
  onClickNewUser(): void { 
    console.log('Nuevo Usuario');
    this._modalSvc.openModal<ModalComponent>(ModalComponent);
  }
}
