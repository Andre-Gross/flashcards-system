import { Directive, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';

@Directive({
  selector: '[appLongPress]',
  standalone: true,
})

export class LongPressDirective implements OnDestroy {
  @Output() longPress = new EventEmitter<void>();

  private timer?: ReturnType<typeof setTimeout>;
  private readonly duration = 400;

  private gesture = this.gestureCtrl.create({
    el: this.el.nativeElement,
    gestureName: 'long-press',
    threshold: 0,
    onStart: () => this.start(),
    onEnd: () => this.cancel(),
    onMove: () => this.cancel(),
  });

  constructor(private el: ElementRef, private gestureCtrl: GestureController) {
    this.gesture.enable();
  }

  private start() {
    this.timer = setTimeout(() => this.longPress.emit(), this.duration);
  }

  private cancel() {
    clearTimeout(this.timer);
  }

  ngOnDestroy() {
    this.gesture.destroy();
  }
}

