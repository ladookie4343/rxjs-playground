import { Component } from '@angular/core';
import { Subject, audit, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
})
export class AuditComponent {
  buttonClicks$ = new Subject();

  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.docClicks$.pipe(
    audit(() => this.buttonClicks$)
  );
  
  onClick() {
    this.buttonClicks$.next(null);
  }
}
