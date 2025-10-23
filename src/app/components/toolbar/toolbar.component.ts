import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES, RouterModule],
  template: `
      <mat-toolbar class="principal">
        <span class="spacer"></span>
        <a mat-button class="butons" [routerLink]="['/']">
          <mat-icon class="icon">home</mat-icon>
          <span class="toolbartext">INICIO</span>
        </a>
        <span class="spacer"></span>

        <a mat-button class="butons" [routerLink]="['/convs']">
          <mat-icon class="icon">co_present</mat-icon>
          <span class="toolbartext">CONVOCATORIA</span>
        </a>
        <span class="spacer"></span>

        <!--<a mat-button class="butons" (click)="emitUserClick()">
          <mat-icon>calendar_today</mat-icon>
          <span>PRE-REGISTRO</span>
        </a>
        <span class="spacer"></span>-->

        <a mat-button class="butons" [routerLink]="['/hoteles']">
          <mat-icon class="icon">hotel</mat-icon>
          <span class="toolbartext">HOSPEDAJE</span>
        </a>
        <span class="spacer"></span>

        <a mat-button class="butons" [routerLink]="['/eventos']">
          <mat-icon class="icon">event_list</mat-icon>
          <span class="toolbartext">EVENTOS</span>
        </a>
        <span class="spacer"></span>
        
        <a mat-button class="butons" [routerLink]="['/grupos']">
          <mat-icon class="icon">newspaper</mat-icon>
          <span class="toolbartext">GRUPOS</span>
        </a>
        <span class="spacer"></span>
        
        <a mat-button class="butons" [routerLink]="['/rules']">
          <mat-icon class="icon">article</mat-icon>
          <span class="toolbartext">REGLAMENTO</span>
        </a>
        <span class="spacer"></span>

        <a mat-button class="butons" [routerLink]="['/news']">
          <mat-icon class="icon">newspaper</mat-icon>
          <span class="toolbartext">NOTICIAS</span>
        </a>
        <span class="spacer"></span>


        <a mat-button class="butons" [routerLink]="['/tribunal']">
          <mat-icon class="icon">diversity_3</mat-icon>
          <span class="toolbartext">COMITÉ</span>
        </a>
      </mat-toolbar>
  `,
  styles:
  `
.spacer {
    flex: 1 1 auto;
} 
.principal {
  background-color: #d5d5d5;
}

.butons {
  color:rgb(24, 83, 173) !important;
}

.lista {
  display: none;  
}

@media screen and (max-width: 960px) {
  .icon {
    display: none !important;
  }
}

@media screen and (max-width: 736px) {
  .toolbartext {
    display: none !important;  
  }

  .icon {
    display: inline !important;
  }

  .butons {
    font-size: 10px;
  }
}

@media screen and (max-width: 480px) {

  .mdc-button{
    padding: 0 0 !important;
    min-width: 32px;
  }

  .butons {
    font-size: 8px;
  }
}

@media screen and (max-width: 340px) {
  .butons {
    font-size: 6px;
  }
}
  `
})


export class ToolbarComponent {

  onNewUserEvent = output<void>();

  emitUserClick(): void {
    this.onNewUserEvent.emit();
  }

}
