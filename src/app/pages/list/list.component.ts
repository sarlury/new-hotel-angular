import { Component, OnInit } from '@angular/core';
import { HotelResult } from '../../models/hotelListRes';
import { Observable } from 'rxjs';
import { HotelsService } from '../../service/hotels.service';
import { QueryConfig } from '../../utils/query-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  hotelListData$: any;
  searchTerm: string = '';
  sortedColumn: string = 'name';
  sortAsc: boolean = true;
  hotels: HotelResult[] = [];
  queryConfig = QueryConfig;

  currentPage = 1;
  itemsPerPage = 5;

  constructor(
    private hotelService: HotelsService,
    private router: Router
  ) {
   
  }
  ngOnInit() {
    this.hotelService.hotelApi(this.queryConfig.body).subscribe({
      next: (result) => {
        this.hotelListData$ = result.data.getHotels;
      }
    })
  }

  sortBy(column: string) {
    if (this.sortedColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortedColumn = column;
      this.sortAsc = true;
    }
  }

  onDeleteHotel(id: number) {
    this.hotelService.hotelApi(this.queryConfig.deleted(id)).subscribe({
      next: (result) => {
        console.log(result)
        this.ngOnInit();
      },
      error: (error) => {
        console.log('error', error)
      }
    })
  }

  addNewHotel() {
    this.router.navigateByUrl('/form')
  }

  editHotel(id: number, name: string, location: string, description: string) {
    const data = {
      id: id,
      name: name,
      location: location,
      description: description
    }
    this.router.navigate(['/edit'], {queryParams: data});
  }
 

}
