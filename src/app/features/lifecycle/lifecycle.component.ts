import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
  imports: [ CommonModule, FormsModule ],
  standalone: true
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputProperty: string = '';
  lifecycleEvents: string[] = [];

  logEvent(event: string): void {
    this.lifecycleEvents.push(`${new Date().toLocaleTimeString()}: ${event}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logEvent('ngOnChanges - inputProperty changed');
  }

  ngOnInit(): void {
    this.logEvent('ngOnInit - component initialized');
  }

  ngDoCheck(): void {
    this.logEvent('ngDoCheck - change detection cycle triggered');
  }

  ngAfterContentInit(): void {
    this.logEvent('ngAfterContentInit - projected content initialized');
  }

  ngAfterContentChecked(): void {
    this.logEvent('ngAfterContentChecked - projected content checked');
  }

  ngAfterViewInit(): void {
    this.logEvent('ngAfterViewInit - component views initialized');
  }

  ngAfterViewChecked(): void {
    this.logEvent('ngAfterViewChecked - component views checked');
  }

  ngOnDestroy(): void {
    this.logEvent('ngOnDestroy - component destroyed');
  }

  clearEvents(): void {
    this.lifecycleEvents = [];
  }
}
