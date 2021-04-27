import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {FietstochtOverzichtComponent} from './overzicht/fietstocht-overzicht.component';
import {Fietstocht1Component} from './tocht1/fietstocht1.component';
import {Fietstocht2Component} from './tocht2/fietstocht2.component';
import {Fietstocht3Component} from './tocht3/fietstocht3.component';

@NgModule({
    declarations: [
        FietstochtOverzichtComponent,
        Fietstocht1Component,
        Fietstocht2Component,
        Fietstocht3Component,
    ],
    imports: [
        CoreModule,
    ],
    exports: [
        FietstochtOverzichtComponent,
        Fietstocht1Component,
        Fietstocht2Component,
        Fietstocht3Component,
    ],
})
export class FietstochtModule {
}
