import {Component, Input} from '@angular/core';
import {Fietstocht} from '../../fietstocht/fietsttocht';

@Component({
    selector: 'rvp-detail-card',
    templateUrl: './detail-card.component.html',
    styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {

    @Input()
    fietstocht!: Fietstocht;
}
