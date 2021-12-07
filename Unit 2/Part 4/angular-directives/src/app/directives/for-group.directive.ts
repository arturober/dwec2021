import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[forGroup]',
})
export class ForGroupDirective implements OnChanges {
  @Input('forGroupOf') array: any[] = [];
  @Input('forGroupBy') num: number = 1;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.num = +this.num;
    this.viewContainer.clear();
    for (let i = 0; i < this.array.length; i += this.num) {
      const items = this.array.slice(i, i + this.num);
      // Last row (Adding empty strings if we haven't reach the number)
      for (let j = items.length; j < this.num; j++) {
        items[j] = null;
      }
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: items,
      });
    }
  }
  tor() {}
}
