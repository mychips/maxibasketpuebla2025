import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-convoca',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './convoca.component.html',
  styleUrl: './convoca.component.scss'
})
export class ConvocaComponent {
}
