import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Fietstocht} from '../../fietstocht/fietsttocht';

@Component({
    selector: 'rvp-overzicht-card',
    templateUrl: './overzicht-card.component.html',
    styleUrls: ['./overzicht-card.component.scss'],
})
export class OverzichtCardComponent {

    @Input()
    fietstocht!: Fietstocht;
    @Output()
    detailsClick: EventEmitter<void> = new EventEmitter<void>();

    onDetailsClick(): void {
        this.detailsClick.emit();
    }
}
