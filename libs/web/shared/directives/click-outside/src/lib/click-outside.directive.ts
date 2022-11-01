import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[tgClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event:target'])
  onClickOutside(target: ElementRef) {
    const isClickInside = this.elementRef.nativeElement.contains(target);
    if (!isClickInside) {
      this.clickOutside.emit();
    }
  }
}
