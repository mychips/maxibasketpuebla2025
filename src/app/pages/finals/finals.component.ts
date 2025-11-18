import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finals',
  standalone: true,
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
  ],
  templateUrl: './finals.component.html',
  styleUrls: ['./finals.component.scss'],
})
export class FinalsComponent {
  bracketData = {
    quarterFinals: [
      {
        // QF 1
        teamA: { name: 'Equipo A', score: null },
        teamB: { name: 'Equipo B', score: null },
      },
      {
        // QF 2
        teamA: { name: 'Equipo C', score: null },
        teamB: { name: 'Equipo D', score: null },
      },
      {
        // QF 3
        teamA: { name: 'Equipo E', score: null },
        teamB: { name: 'Equipo F', score: null },
      },
      {
        // QF 4
        teamA: { name: 'Equipo G', score: null },
        teamB: { name: 'Equipo H', score: null },
      },
    ],
    semiFinals: [
      {
        // SF 1 (Ganador QF 1 vs QF 2)
        teamA: { name: 'Ganador QF1', score: null },
        teamB: { name: 'Ganador QF2', score: null },
      },
      {
        // SF 2 (Ganador QF 3 vs QF 4)
        teamA: { name: 'Ganador QF3', score: null },
        teamB: { name: 'Ganador QF4', score: null },
      },
    ],
    final: [
      {
        // Final (Ganador SF 1 vs SF 2)
        teamA: { name: 'Ganador SF1', score: null },
        teamB: { name: 'Ganador SF2', score: null },
      },
    ],
  };

  constructor() {}
}
