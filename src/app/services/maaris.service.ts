import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerSearchPOJO } from '../models/customerserachpojo.model';

const baseUrl = 'http://localhost:8084/';

@Injectable({
	providedIn: 'root',
})
export class MaarisService {
	
	constructor(private http: HttpClient) {
	 }
	 

	getAll(name: any, vorname: any): Observable<CustomerSearchPOJO[]> {
		//	return this.http.get<CustomerSearchPOJO[]>(baseUrl.concat('getCustomerSearchResult'));

		return this.http.get<CustomerSearchPOJO[]>(`${"api/getCustomerSearchResultPathParam"}/${name}/${vorname}`);
	}

}

