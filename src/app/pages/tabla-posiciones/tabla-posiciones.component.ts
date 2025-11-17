import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { EquipoEstadisticas } from '@shared/interfaces/teamStat.interfaces';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

const MATERIAL_MODULES = [MatTableModule, MatSortModule, MatCardModule];

interface LigasData {
  [categoria: string]: {
    [rama: string]: {
      [grupo: string]: EquipoEstadisticas[];
    };
  };
}

@Component({
  selector: 'app-tabla-posiciones',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatCardContent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.scss'],
})
export class TablaPosicionesComponent implements OnInit, AfterViewInit {
  public filtrosForm: FormGroup;
  public categorias: string[] = [];
  public ramas: string[] = [];
  public grupos: string[] = [];
  displayedColumns: string[] = [
    'pos',
    'nombre',
    'pj',
    'pg',
    'pp',
    'pf',
    'pc',
    'dif',
  ];

  private ligasData: LigasData = {
    Universitaria: {
      Varonil: {
        'Grupo A': [
          {
            nombre: 'Águilas Doradas',
            pj: 3,
            pg: 3,
            pp: 0,
            pf: 280,
            pc: 240,
            dif: 0,
          },
          {
            nombre: 'Tigres de Acero',
            pj: 3,
            pg: 2,
            pp: 1,
            pf: 265,
            pc: 250,
            dif: 0,
          },
          {
            nombre: 'Halcones Rojos',
            pj: 3,
            pg: 1,
            pp: 2,
            pf: 250,
            pc: 270,
            dif: 0,
          },
          {
            nombre: 'Guerreros de Plata',
            pj: 3,
            pg: 0,
            pp: 3,
            pf: 230,
            pc: 265,
            dif: 0,
          },
        ],
        'Grupo B': [
          {
            nombre: 'Potros Salvajes',
            pj: 3,
            pg: 3,
            pp: 0,
            pf: 300,
            pc: 250,
            dif: 0,
          },
          {
            nombre: 'Leones Negros',
            pj: 3,
            pg: 2,
            pp: 1,
            pf: 270,
            pc: 260,
            dif: 0,
          },
          {
            nombre: 'Búhos Grises',
            pj: 3,
            pg: 1,
            pp: 2,
            pf: 240,
            pc: 250,
            dif: 0,
          },
          {
            nombre: 'Tiburones Azules',
            pj: 3,
            pg: 0,
            pp: 3,
            pf: 220,
            pc: 270,
            dif: 0,
          },
        ],
      },
      Femenil: {
        'Grupo Único': [
          {
            nombre: 'Panteras Rosas',
            pj: 2,
            pg: 2,
            pp: 0,
            pf: 180,
            pc: 150,
            dif: 0,
          },
          {
            nombre: 'Reinas del Sur',
            pj: 2,
            pg: 1,
            pp: 1,
            pf: 160,
            pc: 165,
            dif: 0,
          },
          {
            nombre: 'Amazonas Verdes',
            pj: 2,
            pg: 1,
            pp: 1,
            pf: 170,
            pc: 170,
            dif: 0,
          },
          {
            nombre: 'Estrellas Fugaces',
            pj: 2,
            pg: 0,
            pp: 2,
            pf: 140,
            pc: 165,
            dif: 0,
          },
        ],
      },
    },
    Juvenil: {
      Varonil: {
        'Grupo Norte': [
          { nombre: 'Jaguares', pj: 2, pg: 2, pp: 0, pf: 150, pc: 120, dif: 0 },
          { nombre: 'Coyotes', pj: 2, pg: 1, pp: 1, pf: 130, pc: 135, dif: 0 },
          { nombre: 'Lobos', pj: 2, pg: 1, pp: 1, pf: 140, pc: 140, dif: 0 },
          { nombre: 'Toros', pj: 2, pg: 0, pp: 2, pf: 110, pc: 135, dif: 0 },
        ],
      },
    },
  };

  dataSource = new MatTableDataSource<EquipoEstadisticas>();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario
    this.filtrosForm = this.fb.group({
      categoria: [null, Validators.required],
      rama: [{ value: null, disabled: true }, Validators.required],
      grupo: [{ value: null, disabled: true }, Validators.required],
    });
  }

  ngOnInit(): void {
    this.categorias = Object.keys(this.ligasData);
    this.escucharCambiosFormulario();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  private escucharCambiosFormulario(): void {
    // 1. Cuando cambia la CATEGORÍA
    this.filtrosForm.get('categoria')?.valueChanges.subscribe((categoria) => {
      // Limpiar y deshabilitar selects dependientes
      this.filtrosForm.get('rama')?.reset();
      this.filtrosForm.get('grupo')?.reset();
      this.ramas = [];
      this.grupos = [];
      this.dataSource.data = []; // Limpiar tabla

      if (categoria) {
        // Cargar nuevas ramas y habilitar el select
        this.ramas = Object.keys(this.ligasData[categoria]);
        this.filtrosForm.get('rama')?.enable();
      } else {
        this.filtrosForm.get('rama')?.disable();
        this.filtrosForm.get('grupo')?.disable();
      }
    });

    // 2. Cuando cambia la RAMA
    this.filtrosForm.get('rama')?.valueChanges.subscribe((rama) => {
      // Limpiar y deshabilitar select de grupo
      this.filtrosForm.get('grupo')?.reset();
      this.grupos = [];
      this.dataSource.data = []; // Limpiar tabla

      const categoria = this.filtrosForm.get('categoria')?.value;
      if (categoria && rama) {
        // Cargar nuevos grupos y habilitar el select
        this.grupos = Object.keys(this.ligasData[categoria][rama]);
        this.filtrosForm.get('grupo')?.enable();
      } else {
        this.filtrosForm.get('grupo')?.disable();
      }
    });

    // 3. Cuando cambia el GRUPO
    this.filtrosForm.get('grupo')?.valueChanges.subscribe((grupo) => {
      const categoria = this.filtrosForm.get('categoria')?.value;
      const rama = this.filtrosForm.get('rama')?.value;

      if (categoria && rama && grupo) {
        // Cargar los datos en la tabla
        const datos = this.ligasData[categoria][rama][grupo];
        this.actualizarTabla(datos);
      } else {
        this.dataSource.data = []; // Limpiar tabla
      }
    });
  }

  private actualizarTabla(datos: EquipoEstadisticas[]): void {
    // Calculamos la diferencia de puntos
    let equiposConDif = datos.map((equipo) => ({
      ...equipo,
      dif: equipo.pf - equipo.pc,
    }));

    // Ordenamos inicialmente por PG -> DIF -> PF
    equiposConDif.sort((a, b) => {
      if (b.pg !== a.pg) return b.pg - a.pg;
      if (b.dif !== a.dif) return b.dif - a.dif;
      return b.pf - a.pf;
    });

    this.dataSource.data = equiposConDif;
  }
}
