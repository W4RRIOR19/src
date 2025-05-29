import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cartilla',
    loadChildren: () => import('./cartilla/cartilla.module').then( m => m.CartillaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'campana',
    loadChildren: () => import('./campana/campana.module').then( m => m.CampanaPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'unidad',
    loadChildren: () => import('./unidad/unidad.module').then( m => m.UnidadPageModule)
  },
  {
    path: 'cita',
    loadChildren: () => import('./cita/cita.module').then( m => m.CitaPageModule)
  },
  {
    path: 'medicamento',
    loadChildren: () => import('./medicamento/medicamento.module').then( m => m.MedicamentoPageModule)
  },
  {
    path: 'tratamiento',
    loadChildren: () => import('./tratamiento/tratamiento.module').then( m => m.TratamientoPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'receta',
    loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule)
  },
  {
    path: 'vacuna',
    loadChildren: () => import('./vacuna/vacuna.module').then( m => m.VacunaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
