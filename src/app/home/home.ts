import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule], // <-- THIS is important
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}
