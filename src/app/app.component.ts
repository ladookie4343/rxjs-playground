import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  currentSelection$ = new BehaviorSubject<string>('audit');
  
  setSelection(selection: string) {
    this.currentSelection$.next(selection);
  }

}
