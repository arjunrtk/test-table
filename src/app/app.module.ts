import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SortDirective } from './directives/sort.directive';
import { FilterPipe } from './utils/filter-table.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SortDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [FilterPipe],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
