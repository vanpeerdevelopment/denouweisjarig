import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FietstochtService} from '../fietstocht.service';
import {Fietstocht} from '../fietsttocht';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    templateUrl: './fietstocht-detail.component.html',
    styleUrls: ['./fietstocht-detail.component.scss'],
})
export class FietstochtDetailComponent implements OnInit {

    fietstocht: Observable<Fietstocht | undefined> = new Observable<Fietstocht | undefined>();

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private fietstochtService: FietstochtService) {
    }

    ngOnInit(): void {
        this.fietstocht = this.activatedRoute.params
            .pipe(
                map(params => params.id),
                map(id => this.fietstochtService.getFietstocht(id)));
    }
}
