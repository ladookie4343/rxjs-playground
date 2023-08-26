import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuditComponent } from './operators/audit/audit.component';
import { AuditTimeComponent } from './operators/audit-time/audit-time.component';
import { BufferComponent } from './operators/buffer/buffer.component';
import { BufferCountComponent } from './operators/buffer-count/buffer-count.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditComponent,
    AuditTimeComponent,
    BufferComponent,
    BufferCountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
