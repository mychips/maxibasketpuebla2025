import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalHomeComponent } from '@components/modal-home/modal-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  private readonly _dialog = inject(MatDialog);

  
  ngOnInit(): void {
      this._dialog.open(ModalHomeComponent, {
        width: '600px'
      })
      .afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
  }
