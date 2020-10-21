import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://restcountries.eu/rest/v2/all';

getCountryData() {
  return this.http.get(this.configUrl);
}
}
