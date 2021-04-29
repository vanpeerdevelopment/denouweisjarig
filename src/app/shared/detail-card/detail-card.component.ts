import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Fietstocht} from '../../fietstocht/fietsttocht';

@Component({
    selector: 'rvp-detail-card',
    templateUrl: './detail-card.component.html',
    styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {

    @Input()
    fietstocht!: Fietstocht;
    @Output()
    overzichtClick: EventEmitter<void> = new EventEmitter<void>();

    onOverzichtClick(): void {
        this.overzichtClick.emit();
    }
}
