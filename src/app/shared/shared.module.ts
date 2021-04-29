import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {OverzichtCardComponent} from './overzicht-card/overzicht-card.component';

@NgModule({
    declarations: [
        OverzichtCardComponent,
    ],
    imports: [
        CoreModule,
    ],
    exports: [
        OverzichtCardComponent,
    ],
})
export class SharedModule {
}
