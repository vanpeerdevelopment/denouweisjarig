import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FietstochtModule} from '../fietstocht/fietstocht.module';
import {FietstochtOverzichtComponent} from '../fietstocht/overzicht/fietstocht-overzicht.component';
import {FietstochtDetailComponent} from '../fietstocht/detail/fietstocht-detail.component';

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
        path: 'fietstocht/:id',
        component: FietstochtDetailComponent,
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
