import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawerMode, MatSidenav} from '@angular/material/sidenav';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointService} from '../../core/material/breakpoint.service';
import {Router} from '@angular/router';

@Component({
    selector: 'rvp-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    @ViewChild(MatSidenav)
    private matSidenav: MatSidenav | undefined;
    sidenavConfig$: Observable<SidenavConfig> | undefined;

    constructor(private breakpointService: BreakpointService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.sidenavConfig$ = this.breakpointService
            .isSmallDevice$()
            .pipe(map(isSmall => isSmall ? SidenavConfig.forSmallDevice() : SidenavConfig.forLargeDevice()));
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

    navigateTo(url: string, sidenavConfig: SidenavConfig): void {
        this.router.navigateByUrl(url);
        if (sidenavConfig.isModal()) {
            this.close();
        }
    }

    isUrlActive(url: string): boolean {
        return this.router.isActive(url, false);
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
