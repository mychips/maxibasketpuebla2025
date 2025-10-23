import { RegRefereesComponent } from './pages/reg-referees/reg-referees.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from '@features/users/users.component';
import { ConvocaComponent } from './pages/convoca/convoca.component';
import { RulesComponent } from './pages/rules/rules.component';
import { NewsComponent } from './pages/news/news.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListaRefereesComponent } from './pages/reg-referees/lista-referees/lista-referees.component';
import { TablePDFComponent } from './table-pdf/table-pdf.component';
import { LoadimgComponent } from '@features/loadimg/loadimg.component';
import { GridComponent } from '@components/grid/grid.component';
import { ListComponent } from '@features/users/list/list.component';
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { TribunalComponent } from './pages/tribunal/tribunal.component';
import { ListasOficialesComponent } from './pages/listas-oficiales/listas-oficiales.component';
import { GruposComponent } from './pages/grupos/grupos.component';

export const routes: Routes = [
    {   path: 'home',       component: HomeComponent,           title: 'Pagina Principal'  },
    {   path: 'usersList',  component: ListComponent,           title: 'Lista de Usuarios' },
    {   path: 'news',       component: NewsComponent,           title: 'Noticias'          },
    {   path: 'convs',      component: ConvocaComponent,        title: 'Convocatoria'      },
    {   path: 'eventos',    component: EventosComponent,        title: 'Eventos'           },
    {   path: 'hoteles',    component: HotelesComponent,        title: 'Hoteles'           },
    {   path: 'clinica',    component: ClinicaComponent,        title: 'Clinica'           },
    {   path: 'rules',      component: RulesComponent,          title: 'Reglamento'        },
    {   path: 'registro',   component: RegistroComponent,       title: 'Registro'          },
    {   path: 'regReferees',component: RegRefereesComponent,    title: 'Arbitros'          },
    {   path: 'listaRef'   ,component: ListaRefereesComponent,  title: 'Lista de Arbitros' },
    {   path: 'genPDF',     component: TablePDFComponent,       title: 'Tabla a PDF'       },
    {   path: 'grupos',     component: GruposComponent,         title: 'Grupos'            },
    {   path: 'loadimg:id', component: LoadimgComponent,        title: 'Carga de Archivos' },
    {   path: 'tribunal',   component: TribunalComponent,       title: 'Tribunal'          },
    {   path: 'listOficial',component: ListasOficialesComponent,title: 'Listas Verificadas'},
    {   path: 'users',      loadChildren: () => import('./features/users/users.routes')    },
    {   path: '**',         pathMatch: 'full',              redirectTo: '/home'            },     
];