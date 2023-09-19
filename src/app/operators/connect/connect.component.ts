import { Component } from '@angular/core';
import { tap, connect, merge, map, filter, interval } from 'rxjs';
 


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
})
export class ConnectComponent {
  source$ = interval(1000).pipe(
    tap({
      subscribe: () => console.log('subscription started'),
      next: n => console.log(`source emitted ${ n }`)
    })
  );
   
  result$ = this.source$.pipe(
    // Notice in here we're merging 3 subscriptions to `shared$`.
    connect(shared$ => merge(
      shared$.pipe(map(n => `all ${ n }`)),
      shared$.pipe(filter(n => n % 2 === 0), map(n => `even ${ n }`)),
      shared$.pipe(filter(n => n % 2 === 1), map(n => `odd ${ n }`))
    ))
  );
}
