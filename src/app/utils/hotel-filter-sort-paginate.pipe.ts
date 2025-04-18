import { Pipe, PipeTransform } from '@angular/core';
import { HotelResult } from '../models/hotelListRes';

@Pipe({
  name: 'hotelFilterSortPaginate',
  standalone: false
})
export class HotelFilterSortPaginatePipe implements PipeTransform {

  transform(
    hotels: HotelResult[],
    searchTerm: string,
    sortedColumn: string,
    sortAsc: boolean,
    currentPage: number,
    itemsPerPage: number
  ): HotelResult[] {
    if (!hotels) return [];

    let filtered = hotels.filter(h =>
      h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortedColumn) {
      filtered.sort((a: any, b: any) => {
        const aVal = a[sortedColumn];
        const bVal = b[sortedColumn];
        return sortAsc ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
      });
    }

    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }

}
