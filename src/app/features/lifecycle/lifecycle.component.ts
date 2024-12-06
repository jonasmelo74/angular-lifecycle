import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ChangeDetectorRef, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';

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
  initialized: boolean = false;
  count = 0;

  private intervalId: any;
  private subscription: Subscription = new Subscription();

  constructor(private cdRef: ChangeDetectorRef) {
  }

  logEvent(event: string): void {
    this.lifecycleEvents.push(`${new Date().toLocaleTimeString()}: ${event}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnChangesCount++;
  }

  ngOnInit(): void {
    this.ngOnInitCount++;
    const observable$ = new Observable<number>((observer) => {
      this.intervalId = setInterval(() => {
        this.count++;
        observer.next(this.count);  
        console.log('Count:', this.count);
      }, 1000);
    });

    // Inscrevendo-se no Observable
    this.subscription = observable$.subscribe((data) => {
      console.log('Data received:', data);
    });
  }

  ngDoCheck(): void {
    this.ngDoCheckCount++;
  }
  
  ngAfterContentInit() {
    console.log('Conteúdo projetado:', this.projected.nativeElement.textContent.trim());
    this.ngAfterContentInitCount++;
  }

  ngAfterContentChecked(): void {
    const currentContent = this.projected2?.nativeElement.textContent.trim();
    if (currentContent !== this.previousContent) {
      this.previousContent = currentContent;
      this.ngAfterContentCheckedCount++;
    }
  }

  ngAfterViewInit(): void {
    this.button.nativeElement.textContent = 'ngAfterViewInit';
    this.ngAfterViewInitCount++;
    this.cdRef.detectChanges();
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewCheckedCount++;
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    alert('ngOnDestroy');

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  clearEvents(): void {
    this.lifecycleEvents = [];
  }

  onInputChange(value: string): void {
  console.log('Valor mudou para:', value);
}

}