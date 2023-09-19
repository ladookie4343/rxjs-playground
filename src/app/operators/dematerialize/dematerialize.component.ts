import { Component } from '@angular/core';
import { ErrorNotification, NextNotification, dematerialize, fromEvent, map, of } from 'rxjs'

@Component({
  selector: 'app-dematerialize',
  templateUrl: './dematerialize.component.html',
})
export class DematerializeComponent {

  notifA: NextNotification<string> = { kind: 'N', value: 'A' };
  notifB: NextNotification<string> = { kind: 'N', value: 'B' };
  notifE: ErrorNotification = { kind: 'E', error: new TypeError('x.toUpperCase is not a function') };
 
  materialized$ = of(this.notifA, this.notifB, this.notifE);
 
  result$ = this.materialized$.pipe(dematerialize());
}
