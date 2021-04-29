import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {OverzichtCardComponent} from './overzicht-card/overzicht-card.component';
import {DetailCardComponent} from './detail-card/detail-card.component';
import {StatsBarComponent} from './stats-bar/stats-bar.component';

@NgModule({
    declarations: [
        OverzichtCardComponent,
        DetailCardComponent,
        StatsBarComponent,
    ],
    imports: [
        CoreModule,
    ],
    exports: [
        OverzichtCardComponent,
        DetailCardComponent,
        StatsBarComponent,
    ],
})
export class SharedModule {
}
