import { GestureHandlerDirective } from './gesture-handler';
import { ElementRef } from '@angular/core';
import { GestureController } from '@ionic/angular/standalone';

const mockEl = { nativeElement: document.createElement('div') } as ElementRef;
const mockGesture = { create: jasmine.createSpy('create').and.returnValue({ enable: () => {}, destroy: () => {} }) } as unknown as GestureController;


describe('GestureHandler', () => {
  it('should create an instance', () => {
    const directive = new GestureHandlerDirective(mockEl, mockGesture);
    expect(directive).toBeTruthy();
  });
});