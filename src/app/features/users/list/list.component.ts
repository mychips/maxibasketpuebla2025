import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ColumnKeys, User } from '@features/users/user.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GridComponent } from '@components/grid/grid.component';
import { UserService } from '@features/users/user.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ GridComponent ],
  template: `
    <Section>
        <app-grid [displayedColumns]="displayedColumns" [data]="users()" [sortableColumns]="sortables"/>
    </Section>
  `,
})
export class ListComponent implements OnInit{
  users = signal<User[]>([]);
  displayedColumns: ColumnKeys<User> = [ 'id', 'name', 'email', 'phone', 'action' ];
  sortables: ColumnKeys<User> = [ 'id', 'name', 'email', 'phone' ];
  
  
  private readonly _userSvc     = inject(UserService);
  private readonly _destroyRef  = inject(DestroyRef);
  
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userSvc.getAllUsers()
      .pipe(takeUntilDestroyed(this._destroyRef),
        tap( (users:User[]) => this.users.set(users))
      )
      .subscribe()
  }
}
