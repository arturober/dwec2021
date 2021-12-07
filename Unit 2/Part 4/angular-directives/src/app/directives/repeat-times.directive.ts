import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeatTimes]',
})
export class RepeatTimesDirective {
  @Input('repeatTimes')
  set repeatTimes(times: number) {
    this.viewContainer.clear(); // When input data changes resets content!
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        current: i + 1,
      });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

}
