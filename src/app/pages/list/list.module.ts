import { NgModule } from "@angular/core";
import { ListComponent } from "./list.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HotelFilterSortPaginatePipe } from "../../utils/hotel-filter-sort-paginate.pipe";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '', component: ListComponent
    }
]

@NgModule({
    declarations: [ListComponent, HotelFilterSortPaginatePipe],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        NgbModule
    ],
    exports: [ListComponent]
})
export class ListModulePage{};