import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'rvp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output()
  menuClick: EventEmitter<void> = new EventEmitter<void>();

  onMenuClick(): void {
    this.menuClick.emit();
  }
}
