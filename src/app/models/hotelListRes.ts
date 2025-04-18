export interface HotelResult {
    id: any;
    name: string;
    location: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
}

export interface HotelResultApi {
    data: {};
    getHotels: [];
}