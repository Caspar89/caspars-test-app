import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AppComponentSecondary } from './app.component.secondary';
import { AppRoutingModule } from './app.routing.module';
import { AppRoot } from './app.root';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentSecondary,
    AppRoot
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppRoot
  ]
})
export class AppModule { }
