import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { UpdateSerieComponent } from './update-serie/update-serie.component';
import { ListSeriesComponent } from './list-series/list-series.component';
import { InfoSerieComponent } from './info-serie/info-serie.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    AddSerieComponent,
    UpdateSerieComponent,
    ListSeriesComponent,
    InfoSerieComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
