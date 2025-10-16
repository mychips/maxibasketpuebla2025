import { MatFormField, MatLabel } from '@angular/material/form-field';
import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
const MATERIAL_MODULES = [MatLabel, MatFormField, MatInput];

@Component({
  selector: 'app-refilter',
  standalone: true,
  imports: [ FormsModule, MATERIAL_MODULES],
  template: `
    <mat-form-field>
    <mat-label>{{label()}}</mat-label>
    <input matInput type="text" [(ngModel)]="filter" [placeholder]="placeholder()">
  </mat-form-field>
  ` ,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``
})
export class RefilterComponent {
  filter = model('');
  label = input<string>('Filter');
  placeholder = input<string>('Ex. name');
}
