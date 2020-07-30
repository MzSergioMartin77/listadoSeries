import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSerieComponent } from './add-serie/add-serie.component';
import { UpdateSerieComponent } from './update-serie/update-serie.component';
import { ListSeriesComponent } from './list-series/list-series.component';
import { InfoSerieComponent } from './info-serie/info-serie.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: ListSeriesComponent},
  {path: 'add-serie', component: AddSerieComponent},
  {path: 'update-serie', component: UpdateSerieComponent},
  {path: 'serie', component:InfoSerieComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
