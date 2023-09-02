import { Component } from '@angular/core';
import { Subject, combineLatestWith, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-combine-latest-with',
  templateUrl: './combine-latest-with.component.html',
})
export class CombineLatestWithComponent {
  buttonClick$ = new Subject();

  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.docClicks$.pipe(
    combineLatestWith(this.buttonClick$)
  );
  
  onClick() {
    this.buttonClick$.next('click');
  }
}
