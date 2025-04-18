import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewHotelsComponent } from './pages/add-new-hotels/add-new-hotels.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HotelFilterSortPaginatePipe } from './utils/hotel-filter-sort-paginate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditHotelComponent } from './pages/edit-hotel/edit-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewHotelsComponent,
    EditHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
