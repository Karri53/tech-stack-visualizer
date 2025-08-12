import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ required for *ngIf and *ngFor
import { FormsModule } from '@angular/forms';
import { StackCardComponent } from '../stack-card/stack-card'; // ✅ make sure this path is correct

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule, FormsModule, StackCardComponent], 
  templateUrl: './builder.html',
  styleUrls: ['./builder.scss']
})
export class BuilderComponent {
  newTech = '';
  stack: string[] = [];

  addTech() {
    if (this.newTech.trim()) {
      this.stack.push(this.newTech.trim());
      this.newTech = '';
    }
  }

  removeTech(index: number) {
    this.stack.splice(index, 1);
  }
}
