import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {FietstochtOverzichtComponent} from './overzicht/fietstocht-overzicht.component';
import {FietstochtDetailComponent} from './detail/fietstocht-detail.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        FietstochtOverzichtComponent,
        FietstochtDetailComponent,
    ],
    imports: [
        CoreModule,
        SharedModule,
        RouterModule,
    ],
    exports: [
        FietstochtOverzichtComponent,
        FietstochtDetailComponent,
    ],
})
export class FietstochtModule {
}
