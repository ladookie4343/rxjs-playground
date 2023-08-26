import { Component } from '@angular/core';
import { bufferCount, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
})
export class BufferCountComponent {
  clicks$ = fromEvent(document, 'click').pipe(
    map((event: Event) => event as MouseEvent),
    map((mouseEvent: MouseEvent) => mouseEvent.clientX)
  );

  result$ = this.clicks$.pipe(bufferCount(2));
  result2$ = this.clicks$.pipe(bufferCount(4, 8));

}
