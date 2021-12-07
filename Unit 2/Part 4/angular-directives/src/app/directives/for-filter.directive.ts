import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[forFilter]',
})
export class ForFilterDirective {
  @Input()
  set forFilterFrom(array: any[]) {
    this.items = array;
  }
  @Input()
  set forFilterBy(filter: (item: any) => boolean) {
    console.log(filter);
    this.viewContainer.clear(); // When input data changes resets content!
    this.items.filter(filter).forEach((elem) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: elem,
      });
    });
  }

  items: any[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
