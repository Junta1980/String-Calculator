import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http: HttpClient) {}

  stringValidator(): AsyncValidatorFn {
    return (control: FormControl): Observable<ValidationErrors> => {
      //debounce time
      return timer(1000)
        .pipe(
          // Mock call
          // check if string is corret, return always ok, fonr not ok in server/db.json change validateString check
          switchMap(() => this.http.get<any>(`http://localhost:3000/validateString`)),
          map(res => res.check ? null : { InvalidString: true })
        );
    };
  }}
