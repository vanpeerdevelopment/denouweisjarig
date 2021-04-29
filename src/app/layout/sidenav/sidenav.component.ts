import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawerMode, MatSidenav} from '@angular/material/sidenav';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointService} from '../../core/material/breakpoint.service';
import {Router} from '@angular/router';
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
    sidenavConfig$!: Observable<SidenavConfig>;
    fietstochten!: Fietstocht[];

    constructor(private breakpointService: BreakpointService,
                private fietstochtService: FietstochtService,
                private router: Router) {
    }

    ngOnInit(): void {
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
