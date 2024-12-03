import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterModule, LifecycleComponent]
})
export class HomeComponent {}