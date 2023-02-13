import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private _storage: StorageService) {}


   post(query: string, data: any) {
		const headers = new HttpHeaders({
			'Authorization': `Bearer ${this._storage.getToken()}`,
			'Content-Type': 'application/json; charset=utf-8'
		});
		return this.http.post(`${environment.server}${query}`, headers, data).pipe(map((res:any)=> res.data));
	}

	get(query:string,sendHeaders:boolean){
		const URL = environment.server + query;
		const headers = new HttpHeaders({
			'Authorization': `Bearer ${this._storage.getToken()}`,
			'Content-Type': 'application/json; charset=utf-8'
		});
		return this.http.get(URL, { headers }).pipe(map((res:any)=> res.data));
	  }
	options(query:string,sendHeaders:boolean){
		const URL = environment.server + query;
		const headers = new HttpHeaders({
			'Authorization': `Bearer ${this._storage.getToken()}`,
			'Content-Type': 'application/json; charset=utf-8'
		});
		return this.http.options(URL, { headers }).pipe(map((res:any)=> res));
	  }
}
