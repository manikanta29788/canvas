import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropperCanvasComponent } from './cropper-canvas/cropper-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    CropperCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
