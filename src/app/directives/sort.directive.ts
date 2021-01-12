import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Sort } from '../utils/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any>;
  constructor(private targetElm: ElementRef) { }

  @HostListener("click")
  sortData() {
    const sort = new Sort();
    const elem = this.targetElm.nativeElement;
    const order = elem.getAttribute('data-order');
    const type = elem.getAttribute('data-type');
    const property = elem.getAttribute('data-name');
    elem.classList = [`sort-${order}`]
    if(order === 'desc') {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'asc');
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'desc');
    }
  }

}
