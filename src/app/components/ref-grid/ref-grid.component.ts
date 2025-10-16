import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, OnInit, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { APP_CONSTANTS2 } from '@shared/constants';
import { RegRefereesService } from 'src/app/pages/reg-referees/reg-referees.service';
import { RefilterComponent } from './refilter/refilter.component';

const MATERIAL_MODULES = [MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule];

@Component({
  selector: 'app-ref-grid',
  standalone: true,
  imports: [ MATERIAL_MODULES, RefilterComponent, CommonModule],
  templateUrl: './ref-grid.component.html',
  styleUrl: './ref-grid.component.scss'
})
export class RefGridComponent<T> implements OnInit{

  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  sortableColumns = input<string[]>([]);
  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');

  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  private readonly _RefereeSvc = inject(RegRefereesService);
  
  constructor() {
    effect(() => {
      if (this.valueToFilter()) {
        this.dataSource.filter = this.valueToFilter();
      } else {
        this.dataSource.filter = '';
      }

      if (this.data()) {
        this.dataSource.data = this.data();
      }
    });
  }


  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

     
  selectedRow(data: T): void {
    console.log('Selected Row:', data);
  }

  deleteUser(id: string): void {
    const confirmation = confirm(APP_CONSTANTS2.MESSAGES.CONFIRMATION_PROMPT);
    
    if (confirmation) {
      this._RefereeSvc.deleteReferee(id);
    }
  }

}
