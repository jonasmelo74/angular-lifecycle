import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectorRef } from '@angular/core';
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

  ngOnChangesCount = 0;
  ngOnInitCount = 0;
  ngDoCheckCount = 0;
  ngAfterContentInitCount = 0;
  ngAfterContentCheckedCount = 0;
  ngAfterViewInitCount = 0;
  ngAfterViewCheckedCount = 0;
  ngOnDestroyCount = 0;

  soma: number = 0
  soma2: number = 0

  constructor(private cdr: ChangeDetectorRef) {}

  logEvent(event: string): void {
    this.lifecycleEvents.push(`${new Date().toLocaleTimeString()}: ${event}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    this.ngOnChangesCount++;
  }

  ngOnInit(): void {
    this.ngOnInitCount++;
  }

  ngDoCheck(): void {
    this.ngDoCheckCount++;
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called with inputProperty:', this.inputProperty);
    this.ngAfterContentInitCount++;
  }

  ngAfterContentChecked(): void {
    this.ngAfterContentCheckedCount++;
  }

  ngAfterViewInit(): void {
    this.ngAfterViewInitCount++;
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewCheckedCount++;
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    alert('ngOnDestroy');
    this.ngOnDestroyCount++;
  }

  clearEvents(): void {
    this.lifecycleEvents = [];
  }

  updateInputProperty(){
    this.soma += 1
    this.soma2 += 1
  }
}