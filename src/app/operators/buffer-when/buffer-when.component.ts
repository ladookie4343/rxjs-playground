import { Component } from '@angular/core';
import { bufferWhen, fromEvent, map, timer } from 'rxjs';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
})
export class BufferWhenComponent {
  clicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );
  
  result$ = this.clicks$.pipe(
    bufferWhen(() => timer(1000))
  );
}
