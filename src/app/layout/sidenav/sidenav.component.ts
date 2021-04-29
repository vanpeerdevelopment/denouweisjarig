import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawerMode, MatSidenav, MatSidenavContent} from '@angular/material/sidenav';
import {Observable} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {BreakpointService} from '../../core/material/breakpoint.service';
import {NavigationEnd, Router} from '@angular/router';
import {Fietstocht} from '../../fietstocht/fietsttocht';
import {FietstochtService} from '../../fietstocht/fietstocht.service';

@Component({
    selector: 'rvp-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    @ViewChild(MatSidenav)
    private matSidenav: MatSidenav | undefined;
    @ViewChild(MatSidenavContent)
    private matSidenavContent: MatSidenavContent | undefined;
    sidenavConfig$!: Observable<SidenavConfig>;
    fietstochten!: Fietstocht[];

    constructor(private breakpointService: BreakpointService,
                private fietstochtService: FietstochtService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            tap(() => this.scrollToTop()))
            .subscribe();
        this.sidenavConfig$ = this.breakpointService
            .isSmallDevice$()
            .pipe(map(isSmall => isSmall ? SidenavConfig.forSmallDevice() : SidenavConfig.forLargeDevice()));
        this.fietstochten = this.fietstochtService.getFietsttochten();
    }

    open(): void {
        this.matSidenav?.open();
    }

    close(): void {
        this.matSidenav?.close();
    }

    toggle(): void {
        this.matSidenav?.toggle();
    }

    navigateToFietstocht(id: string, sidenavConfig: SidenavConfig): void {
        this.router.navigateByUrl(`/fietstocht/${id}`);
        if (sidenavConfig.isModal()) {
            this.close();
        }
    }

    isUrlActive(id: string): boolean {
        return this.router.isActive(`/fietstocht/${id}`, false);
    }

    private scrollToTop() {
        this.matSidenavContent?.scrollTo({top: 0, left: 0, behavior: 'auto'});
    }
}

class SidenavConfig {

    static forSmallDevice(): SidenavConfig {
        return new SidenavConfig('over', false);
    }

    static forLargeDevice(): SidenavConfig {
        return new SidenavConfig('side', true);
    }

    constructor(public mode: MatDrawerMode, public opened: boolean) {
    }

    isModal(): boolean {
        return ['over', 'push'].includes(this.mode);
    }
}
