import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {SidenavComponent} from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
    ],
    imports: [
        CoreModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
    ],
})
export class LayoutModule {
}
