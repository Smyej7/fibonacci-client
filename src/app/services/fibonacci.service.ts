import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fibonacci } from '../models/Fibonacci';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private apiUrl = 'http://localhost:8080/api/fibonacci';
  
  constructor(private httpClient: HttpClient) { }

  getData(number: number): Observable<Fibonacci> {
    return this.httpClient.get<Fibonacci>(`${this.apiUrl}/${number}`);
  }
}
