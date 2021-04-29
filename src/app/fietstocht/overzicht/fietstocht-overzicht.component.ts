import {Component, OnInit} from '@angular/core';
import {FietstochtService} from '../fietstocht.service';
import {Fietstocht} from '../fietsttocht';
import {Router} from '@angular/router';

@Component({
    templateUrl: './fietstocht-overzicht.component.html',
    styleUrls: ['./fietstocht-overzicht.component.scss'],
})
export class FietstochtOverzichtComponent implements OnInit {

    fietsttochten!: Fietstocht[];

    constructor(
        private fietstochtService: FietstochtService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.fietsttochten = this.fietstochtService.getFietsttochten();
    }

    gaNaarDetails(fietstocht: Fietstocht): void {
        this.router.navigateByUrl(`/fietstocht/${fietstocht.id}`)
    }
}
