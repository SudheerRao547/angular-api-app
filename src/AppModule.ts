import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PhotoListComponent } from './app/photo-list/photo-list.component';

@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PhotoListComponent] // Bootstrap PhotoListComponent directly
})
export class AppModule { }
