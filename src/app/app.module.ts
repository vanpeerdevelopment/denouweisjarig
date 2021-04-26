import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RoutingModule} from './routing/routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000'
        }),
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        RoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
