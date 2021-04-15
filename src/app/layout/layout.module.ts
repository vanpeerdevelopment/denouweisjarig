import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CoreModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
})
export class LayoutModule {
}
