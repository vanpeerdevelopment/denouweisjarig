import {Component, Input} from '@angular/core';
import {Fietstocht} from '../../fietstocht/fietsttocht';

@Component({
    selector: 'rvp-stats-bar',
    templateUrl: './stats-bar.component.html',
    styleUrls: ['./stats-bar.component.scss'],
})
export class StatsBarComponent {

    @Input()
    fietstocht!: Fietstocht;

    onDownload() {
        window.open(this.fietstocht.gpxUrl);
    }
}
