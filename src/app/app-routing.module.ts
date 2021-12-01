import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [

    { path: '', loadChildren: () => import('./modulos/auntenticacion/auntenticacion.module').then(m => m.AuntenticacionModule) },
    {
        path: 'app',
        component: InicioComponent,
        children: [
            { path: 'clientes', loadChildren: () => import('./modulos/clientes/clientes.module').then(m => m.ClientesModule) }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
