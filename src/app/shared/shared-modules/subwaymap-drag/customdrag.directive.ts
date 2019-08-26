import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;
@Directive({
  selector: '[appCustomdrag]'
})
export class CustomdragDirective {
  height = 150;
  y = 100;
  oldY = 0;
  grabber = false;
  @Input('lob_id') public lob_id: string;
  @Input('lob_height') public lob_height: number;
  @Output() onValueChanged: EventEmitter<number> = new EventEmitter<number>();



  constructor(private _el: ElementRef) {
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }
    // this.resizer(event.clientY - this.oldY);
    this.oldY = event.clientY;
    $('.grabber').addClass('changeCursor');
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    $('.grabber').removeClass('changeCursor');
    this.grabber = false;
    // this.onValueChanged.emit(this.height);
  }

  // resizer(offsetY: number) {
  //   this.height += offsetY;
  //   setTimeout(() => {
  //     this.onValueChanged.emit(this.height);
  //   }, 0);
  // }


  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    $('.grabber').removeClass('changeCursor');

    this.grabber = true;
    this.oldY = event.clientY;
    this.height = this.lob_height;
  }
}
