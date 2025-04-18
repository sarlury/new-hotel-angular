import { environment } from "../../environment/environment";

export class Path {
    static BaseUrl = environment.apiUrl;

    static HOTEL_LIST = this.BaseUrl + 'graphql';
}