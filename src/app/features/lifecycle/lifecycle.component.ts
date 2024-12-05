import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectorRef, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
  imports: [ CommonModule, FormsModule ],
  standalone: true
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputProperty: string = '';
  lifecycleEvents: string[] = [];

  @ViewChild('ngAfterViewInitButton', { static: false }) button!: ElementRef;
  @ContentChild('projectedContent', { static: false }) projected!: ElementRef;
  @ContentChild('projectedContent2', { static: false }) projected2!: ElementRef;
  previousContent: string | null = null;

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

  ngAfterContentInit() {
    // Content Projection
    console.log('ngAfterContentInit chamado no ChildComponent');
    console.log('Conteúdo projetado:', this.projected.nativeElement.textContent.trim());
  }

  ngAfterContentChecked(): void {
    const currentContent = this.projected2?.nativeElement.textContent.trim();
    console.log(currentContent);
    if (currentContent !== this.previousContent) {
      this.previousContent = currentContent;
      this.ngAfterContentCheckedCount++;
    }
  }

  ngAfterViewInit(): void {
    this.button.nativeElement.textContent = 'ngAfterViewInit Teste';
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