import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { FooterComponent } from './footer/footer.component';
import { LeftImageComponent } from './left-image/left-image.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    FooterComponent,
    LeftImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
