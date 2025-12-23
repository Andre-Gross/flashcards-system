import { Directive, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';

@Directive({
  selector: '[appGestures]',
  standalone: true,
})

export class GestureHandlerDirective implements OnDestroy {
  @Output() longPress = new EventEmitter<void>();
  @Output() swipeLeft = new EventEmitter<void>();
	@Output() swipeRight = new EventEmitter<void>();

  private timer?: ReturnType<typeof setTimeout>;
  private readonly duration = 400;
  private startX = 0; 

  private gesture = this.gestureCtrl.create({
		el: this.el.nativeElement,
		gestureName: 'gestureDefaults',
		threshold: 0,
		onStart: ev => this.start(ev),
		onMove: () => this.cancel(),
		onEnd: ev => this.checkSwipe(ev),
	});

  constructor(private el: ElementRef, private gestureCtrl: GestureController) {
    this.gesture.enable();
  }

  private start(ev: any) {
		this.startX = ev.currentX;
	  this.timer = setTimeout(() => this.longPress.emit(), this.duration);
	}

  private checkSwipe(ev: any) {
		const deltaX = ev.currentX - this.startX;

		if (Math.abs(deltaX) > 100) {
			this.cancel();
			if (deltaX > 0) {
        this.swipeRight.emit();
      }
			else {
        this.swipeLeft.emit();
      }
		}
	}

  private cancel() {
    clearTimeout(this.timer);
  }

  ngOnDestroy() {
    this.gesture.destroy();
  }
}

