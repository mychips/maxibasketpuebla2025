import { Component, effect, inject, input, OnInit, viewChild, signal } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterComponent } from './filter/filter.component';
import { ModalComponent } from '@components/modal/modal.component';
import { UserService } from '@features/users/user.service';
import { SnackBarService } from '@shared/snack-bar.service';
import { ModalService } from '@components/modal/modal.service';
import { APP_CONSTANTS } from '@shared/constants';


const MATERIAL_MODULES = [MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule];

@Component({
  selector: 'app-grid',
  standalone:true,
  imports: [ FilterComponent, MATERIAL_MODULES ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent<T> implements OnInit{
  
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  sortableColumns = input<string[]>([]);
  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');

  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  private readonly _userSvc = inject(UserService);
  private readonly _modalSvc = inject(ModalService);
  private readonly _snackBar = inject(SnackBarService);

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
    }, {allowSignalWrites: true})
  }

  
  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }
  
  openEditForm(data: T): void {
    this._modalSvc.openModal<ModalComponent, T>(ModalComponent, data, true);
  }
  
  selectedRow(data: T): void {
    this.openEditForm(data);
  }

  deleteUser(id: string): void {
    const confirmation = confirm(APP_CONSTANTS.MESSAGES.CONFIRMATION_PROMPT);
    
    if (confirmation) {
      this._userSvc.deleteUser(id);
      this._snackBar.showSnackBar(APP_CONSTANTS.MESSAGES.USER_DELETED);
    }
  }

}
