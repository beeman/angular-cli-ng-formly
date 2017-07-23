import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBuilderModule } from './form-builder/form-builder.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormBuilderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
