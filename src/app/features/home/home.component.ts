import { ChangeDetectorRef, Component, ContentChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterModule, LifecycleComponent, CommonModule, FormsModule ]
})
export class HomeComponent {
  @ContentChild('projectedContent') projected!: HTMLElement;
  showComponent = false;
  inputValue = '';
  inputProperty = 'Teste inicial';
  dynamicContent = 'Texto inicial';

  constructor(private cdr: ChangeDetectorRef){}

  toggleComponent() {
    this.showComponent = !this.showComponent;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  updateInputProperty() {
    this.inputProperty = this.inputValue;
  }

  

  updateContent() {
    this.dynamicContent = `Texto atualizado em ${new Date().toLocaleTimeString()}`;
  }
}