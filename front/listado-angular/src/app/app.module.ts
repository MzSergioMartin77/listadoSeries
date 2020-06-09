import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { UpdateSerieComponent } from './update-serie/update-serie.component';
import { ListSeriesComponent } from './list-series/list-series.component';
import { InfoSerieComponent } from './info-serie/info-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSerieComponent,
    UpdateSerieComponent,
    ListSeriesComponent,
    InfoSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
