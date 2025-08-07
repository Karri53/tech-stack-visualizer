import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stack-card',
  standalone: true,
  imports: [],
  templateUrl: './stack-card.html',
  styleUrls: ['./stack-card.scss']
})
export class StackCardComponent {
  @Input() tech: string = '';
  @Output() remove = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }
}
