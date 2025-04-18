import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HotelResult } from '../models/hotelListRes';
import { Path } from '../utils/Path';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotels = [
    {
      id: 1,
      name: 'Rimba by Ayana Bali',
      location: 'Jimbaran',
      description: 'Rimba by Ayana Bali',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 2,
      name: 'The Kayon Jungle Resort',
      location: 'Ubud',
      description: 'The Kayon Jungle Resort',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 3,
      name: 'Padma Resort Ubud',
      location: 'Ubud',
      description: 'Padma Resort Ubud',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 4,
      name: 'Hyatt Regency Bali',
      location: 'Sanur',
      description: 'Hyatt Regency Bali',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 5,
      name: 'Maya Sanur Resort & Spa',
      location: 'Sanur',
      description: 'Maya Sanur Resort & Spa',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 6,
      name: 'The Seminyak Beach Resort & Spa',
      location: 'Sanur',
      description: 'The Seminyak Beach Resort & Spa',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 7,
      name: 'Adiwana Bisma',
      location: 'Ubud',
      description: 'Adiwana Bisma',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 8,
      name: 'Padma Resort Legian',
      location: 'Legian',
      description: 'Padma Resort Legian',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 9,
      name: 'Melia Bali',
      location: 'Nusa Dua',
      description: 'Melia Bali',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
    {
      id: 10,
      name: 'Maya Ubud Resort & Spa',
      location: 'Ubud',
      description: 'Maya Ubud Resort & Spa',
      createdAt: '14/05/2025',
      updatedAt: '14/05/2025',
      isDeleted: false
    },
  ]

  // url = 'http://localhost:4000/graphql'
  constructor(
    private http: HttpClient
  ) { }

  /**
 * for local test
 * no database
 * @returns HotelResult
 */
  getHotelList(): Observable<HotelResult[]> {
    return of(this.hotels).pipe(
      map(hotels => hotels.filter(hotel => !hotel.isDeleted))
    );
  }

  deleteHotel(id: number): void {
    const index = this.hotels.findIndex(hotel => hotel.id === id);
    if (index !== -1) {
      this.hotels[index].isDeleted = true;
    }
  }
  

  /**
 * from database test
 * @returns
 */
  hotelApi(body: any): Observable<any> {
    return this.http.post(Path.HOTEL_LIST, body).pipe(
      map(result => {
        return result;
      })
    )
  }
}
