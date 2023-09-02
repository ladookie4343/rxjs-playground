import { Component } from '@angular/core';
import { auditTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-audit-time',
  templateUrl: './audit-time.component.html',
})
export class AuditTimeComponent {

  docClicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.docClicks$.pipe(
    auditTime(2000)
  );

  antother$ = this.result$.subscribe(console.log);
}
