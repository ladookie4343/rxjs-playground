import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuditComponent } from './operators/audit/audit.component';
import { AuditTimeComponent } from './operators/audit-time/audit-time.component';
import { BufferComponent } from './operators/buffer/buffer.component';
import { BufferCountComponent } from './operators/buffer-count/buffer-count.component';
import { BufferTimeComponent } from './operators/buffer-time/buffer-time.component';
import { BufferToggleComponent } from './operators/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './operators/buffer-when/buffer-when.component';
import { CatchErrorComponent } from './operators/catch-error/catch-error.component';
import { CombineLatestAllComponent } from './operators/combine-latest-all/combine-latest-all.component';
import { CombineLatestWithComponent } from './operators/combine-latest-with/combine-latest-with.component';
import { ConcatAllComponent } from './operators/concat-all/concat-all.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditComponent,
    AuditTimeComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimeComponent,
    BufferToggleComponent,
    BufferWhenComponent,
    CatchErrorComponent,
    CombineLatestAllComponent,
    CombineLatestWithComponent,
    ConcatAllComponent,
    ConcatMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
