import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FietstochtModule} from '../fietstocht/fietstocht.module';
import {FietstochtOverzichtComponent} from '../fietstocht/overzicht/fietstocht-overzicht.component';
import {Fietstocht1Component} from '../fietstocht/tocht1/fietstocht1.component';
import {Fietstocht2Component} from '../fietstocht/tocht2/fietstocht2.component';
import {Fietstocht3Component} from '../fietstocht/tocht3/fietstocht3.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'fietstocht/overzicht'
    },
    {
        path: 'fietstocht/overzicht',
        component: FietstochtOverzichtComponent,
    },
    {
        path: 'fietstocht/1',
        component: Fietstocht1Component,
    },
    {
        path: 'fietstocht/2',
        component: Fietstocht2Component,
    },
    {
        path: 'fietstocht/3',
        component: Fietstocht3Component,
    },
    {
        path: '**',
        redirectTo: '/fietstocht/overzicht'
    }
];

@NgModule({
    imports: [
        FietstochtModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class RoutingModule {
}
