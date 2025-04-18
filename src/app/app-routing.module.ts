import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddNewHotelsComponent } from './pages/add-new-hotels/add-new-hotels.component';
import { EditHotelComponent } from './pages/edit-hotel/edit-hotel.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'form', component: AddNewHotelsComponent
  },
  {
    path: 'edit', component: EditHotelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
