import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ColumnKeys, Referee } from '@shared/interfaces/referee.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RefGridComponent } from "../../../components/ref-grid/ref-grid.component";
import { RegRefereesService } from '../reg-referees.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-lista-referees',
  standalone: true,
  imports: [RefGridComponent],
  template: `
    <Section>
        <app-ref-grid [displayedColumns]="displayedColumns" [data]="referees()" [sortableColumns]="sortables"/>
    </Section>
  `,
})
export class ListaRefereesComponent implements OnInit{
  referees = signal<Referee[]>([]);
  displayedColumns: ColumnKeys<Referee> = [ 'id', 'refname', 'fnac', 'lnac', 'refphone', 'refemail', 'eventos', 'comision', 'action' ];
  sortables: ColumnKeys<Referee> = [ 'id', 'refname', 'fnac', 'lnac', 'refphone', 'refemail', 'eventos', 'comision' ];
  
  private readonly _refereeSvc     = inject(RegRefereesService);
  private readonly _destroyRef     = inject(DestroyRef);
 

  ngOnInit(): void {
    this.getAllReferees();
  }

  getAllReferees() {
    this._refereeSvc.getAllReferees()
      .pipe(takeUntilDestroyed(this._destroyRef),
        tap( (referees:Referee[]) => this.referees.set(referees))
      )
      .subscribe()
  }
  
}
