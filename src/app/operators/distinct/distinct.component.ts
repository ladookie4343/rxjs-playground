import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { fromEvent, map, distinct } from 'rxjs'

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html'
})
export class DistinctComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX),
  );
  
  result$ = this.docClicks$.pipe(
    distinct()
  );
}
