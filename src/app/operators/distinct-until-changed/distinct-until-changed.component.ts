import { Component } from '@angular/core';
import { fromEvent, map, distinctUntilChanged } from 'rxjs'

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
})
export class DistinctUntilChangedComponent {
  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX),
  );
  
  result$ = this.docClicks$.pipe(
    distinctUntilChanged()
  );
}
