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

  constructor(){}

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  updateInputProperty() {
    this.inputProperty = this.inputValue;
  }

  updateContent() {
    this.dynamicContent = `NgAfterViewChecked: Texto atualizado em ${new Date().toLocaleTimeString()}`;
  }
}