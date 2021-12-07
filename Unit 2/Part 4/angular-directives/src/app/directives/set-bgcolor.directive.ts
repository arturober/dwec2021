import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[setBgcolor]'
})
export class SetBgcolorDirective implements OnChanges {
  @Input('setBgcolor') bgColor = 'transparent';
  @Input('textColor') textColor = 'black';
  isColorSet = false;

  constructor(private readonly elemRef: ElementRef) { }

  @HostBinding('style.backgroundColor') styleBg!: string;
  @HostBinding('style.color') styleColor!: string;

  @HostListener('click')
  onClick() {
    if(!this.isColorSet) {
      this.styleBg = this.bgColor;
      this.styleColor = this.textColor;
    } else {
      this.styleBg = 'transparent';
      this.styleColor = 'black';
    }
    this.isColorSet = !this.isColorSet;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.isColorSet) {
      this.styleBg = this.bgColor;
      this.styleColor = this.textColor;
    }
  }

}
