import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// --- Angular Material Modules ---
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild, AfterViewInit } from '@angular/core';

export interface Partido {
  partido: string;
  fecha: string;
  hora: string;
  categoria: string;
  equipoLocal: string;
  equipoVisitante: string;
  cancha: string;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatSortModule,
  ],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolesComponent implements OnInit, AfterViewInit {
  private todosLosPartidos: Partido[] = [
    // --- Partidos de "Hoy" (17/11/2025) ---
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '08:00',
      categoria: 'Varonil 54+',
      equipoLocal: 'REMS XITH',
      equipoVisitante: 'DURANGO',
      cancha: 'CENICH',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '09:15',
      categoria: 'Varonil 54+',
      equipoLocal: 'KORANAY',
      equipoVisitante: 'IMPULSO ALCO',
      cancha: 'CENICH',
    },
    {
      partido: 'Final',
      fecha: '2025-11-17',
      hora: '10:30',
      categoria: 'Femenil 29+',
      equipoLocal: 'CAZADORAS',
      equipoVisitante: 'VALQUIRIAS',
      cancha: 'CENICH',
    },
    {
      partido: 'Tercer Lugar',
      fecha: '2025-11-17',
      hora: '11:45',
      categoria: 'Femenil 29+',
      equipoLocal: 'VALHALLA',
      equipoVisitante: 'FENIX',
      cancha: 'CENICH',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '08:00',
      categoria: ' Varonil 49+',
      equipoLocal: 'SAMEX',
      equipoVisitante: 'ORCAS',
      cancha: 'CENTRO ESCOLAR MORELOS',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '09:15',
      categoria: 'Varonil 49+',
      equipoLocal: 'SHARKS',
      equipoVisitante: 'GASEROS A',
      cancha: 'CENTRO ESCOLAR MORELOS',
    },
    {
      partido: 'Jornada 5',
      fecha: '2025-11-17',
      hora: '10:30',
      categoria: 'Varonil 74+',
      equipoLocal: 'DORADOS',
      equipoVisitante: 'CIMARRONES BAJA 75',
      cancha: 'CENTRO ESCOLAR MORELOS',
    },
    {
      partido: 'Jornada 5',
      fecha: '2025-11-17',
      hora: '11:45',
      categoria: 'Varonil 74+',
      equipoLocal: 'SONORA',
      equipoVisitante: 'JALISCO',
      cancha: 'CENTRO ESCOLAR MORELOS',
    },
    {
      partido: 'Jornada 5',
      fecha: '2025-11-17',
      hora: '13:00',
      categoria: 'Varonil 74+',
      equipoLocal: 'CHINACOS GUERREROS',
      equipoVisitante: 'CORAS',
      cancha: 'CENTRO ESCOLAR MORELOS',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '08:00',
      categoria: 'Varonil 64+',
      equipoLocal: 'LOBILLOS',
      equipoVisitante: 'AGUACATEROS DE MICHOACAN',
      cancha: 'CLUB ALPHA 2',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '09:15',
      categoria: 'Varonil 64+',
      equipoLocal: 'BAJA',
      equipoVisitante: 'MOTOS AZTKS',
      cancha: 'CLUB ALPHA 2',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '08:00',
      categoria: 'Varonil 34+',
      equipoLocal: 'TEAM BLADE',
      equipoVisitante: 'ATLANTES DE HIDALGO',
      cancha: 'CUAUTLANCINGO',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '09:15',
      categoria: 'Varonil 34+',
      equipoLocal: 'IRISH',
      equipoVisitante: 'TIMBER',
      cancha: 'CUAUTLANCINGO',
    },
    {
      partido: 'Jornada 3',
      fecha: '2025-11-17',
      hora: '10:30',
      categoria: 'Varonil 79+',
      equipoLocal: 'LEYENDAS CORAS',
      equipoVisitante: 'GUERREROS AZTECAS',
      cancha: 'CUAUTLANCINGO',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '08:00',
      categoria: 'Varonil 59+',
      equipoLocal: 'TEKUANES',
      equipoVisitante: 'AMIGOS INDESTRUCTIBLES',
      cancha: 'ITP',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '09:15',
      categoria: 'Varonil 59+',
      equipoLocal: 'YMCA CHIHUAHUA',
      equipoVisitante: 'TIJUANA BAJA',
      cancha: 'ITP',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '10:30',
      categoria: 'Femenil 64+',
      equipoLocal: 'ANGELES',
      equipoVisitante: 'COSTAS DE GUERRERO',
      cancha: 'ITP',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '08:00',
      categoria: 'Femenil 59+',
      equipoLocal: 'MIX MICHOACAN',
      equipoVisitante: 'FUSHION IMSS',
      cancha: 'UMAD 1',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '09:15',
      categoria: 'Femenil 49+',
      equipoLocal: 'FUSHION',
      equipoVisitante: 'CHIHUAHUA',
      cancha: 'UMAD 1',
    },
    {
      partido: 'Jornada 4',
      fecha: '2025-11-17',
      hora: '11:45',
      categoria: 'Varonil 29+',
      equipoLocal: 'EGA',
      equipoVisitante: 'COYOTES',
      cancha: 'UMAD 1',
    },
    {
      partido: 'Final',
      fecha: '2025-11-17',
      hora: '13:00',
      categoria: 'Femenil 34+',
      equipoLocal: 'PEPSI',
      equipoVisitante: 'OSAS',
      cancha: 'UMAD 1',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '08:00',
      categoria: 'Femenil 59+',
      equipoLocal: 'HIDROCALIDAS',
      equipoVisitante: 'ENSENADA',
      cancha: 'UMAD 2',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '09:15',
      categoria: 'Femenil 49+',
      equipoLocal: 'PUMAS CDMX',
      equipoVisitante: 'MAGIC TEAM',
      cancha: 'UMAD 2',
    },
    {
      partido: 'Jornada 4',
      fecha: '2025-11-17',
      hora: '11:45',
      categoria: 'Varonil 29+',
      equipoLocal: 'DIABLOS',
      equipoVisitante: 'XINANTECATL',
      cancha: 'UMAD 2',
    },
    {
      partido: 'Tercer Lugar',
      fecha: '2025-11-17',
      hora: '13:00',
      categoria: 'Femenil 34+',
      equipoLocal: 'CHATS NOIRS',
      equipoVisitante: 'MAXIS',
      cancha: 'UMAD 2',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '08:00',
      categoria: 'Femenil 39+',
      equipoLocal: 'UNIV DURANGO',
      equipoVisitante: 'MAXI REGIAS',
      cancha: 'UPAEP J',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '09:15',
      categoria: 'Varonil 39+',
      equipoLocal: 'ROKA',
      equipoVisitante: 'TURRAKANES',
      cancha: 'UPAEP J',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '11:45',
      categoria: 'Varonil 44+',
      equipoLocal: 'DRUNKERS',
      equipoVisitante: 'SONORA',
      cancha: 'UPAEP J',
    },
    {
      partido: 'Tercer Lugar',
      fecha: '2025-11-17',
      hora: '13:00',
      categoria: 'Femenil 39+',
      equipoLocal: 'MARAVILLAS',
      equipoVisitante: 'STRONWMN',
      cancha: 'UPAEP J',
    },
    {
      partido: 'Tercer Lugar',
      fecha: '2025-11-17',
      hora: '13:00',
      categoria: 'Varonil 39+',
      equipoLocal: 'ARAÑAS',
      equipoVisitante: 'TIGRES MCRI',
      cancha: 'UPAEP J',
    },
    {
      partido: 'Semifinal',
      fecha: '2025-11-17',
      hora: '11:45',
      categoria: 'Varonil 44+',
      equipoLocal: 'GRUPO CINO',
      equipoVisitante: 'MILOS',
      cancha: 'UPAEP NIDO',
    },
    {
      partido: 'Jornada 3',
      fecha: '2025-11-17',
      hora: '11:45',
      categoria: 'Femenil 74+',
      equipoLocal: 'ANGELES DE PUEBLA',
      equipoVisitante: 'ADELITAS',
      cancha: 'UTP',
    },
    {
      partido: 'Jornada 3',
      fecha: '2025-11-17',
      hora: '13:00',
      categoria: 'Femenil 64+',
      equipoLocal: 'BAJA MIX',
      equipoVisitante: 'MONARCAS',
      cancha: 'UTP',
    },
  ];

  public dataSource = new MatTableDataSource<Partido>();

  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = [
    'fecha',
    'hora',
    'liga',
    'partido',
    'cancha',
  ];

  ngOnInit(): void {
    this.dataSource.data = this.todosLosPartidos;
  }

  ngAfterViewInit(): void {
    // Configuramos el ordenamiento
    this.dataSource.sort = this.sort;
  }

  public getTeamInitials(name: string): string {
    if (!name) return '??';

    const words = name.split(' ');

    if (words.length > 1) {
      return (words[0][0] + words[1][0]).toUpperCase();
    } else if (name.length > 1) {
      return (name[0] + name[1]).toUpperCase();
    } else {
      return name.toUpperCase();
    }
  }
}
