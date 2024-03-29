import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/model/stock-model';

@Injectable({
	providedIn: 'root'
})
export class DashboardService {

	readonly baseUrl = 'https://santander-dev-week-dio-backend.herokuapp.com';

	constructor(private http: HttpClient) { }

	async getStocks(): Promise<Stock[]>{
		return this.http.get<Stock[]>(`${ this.baseUrl }/stock`).toPromise();
	}
}
