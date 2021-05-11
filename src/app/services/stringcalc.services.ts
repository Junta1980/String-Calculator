import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { handleError } from './simplehandlerrror';


@Injectable({
  providedIn: 'root'
})

export class StringCalcService{

  constructor(private http: HttpClient) {}

  calcString(): Observable<strgincalc>{
    const url = environment.urlApi + 'strgincalc';
    return this.http.get<strgincalc>(url).pipe(
      retry(1),
      catchError(handleError)
    );
  }

}

export interface strgincalc {
  value: number;
}
