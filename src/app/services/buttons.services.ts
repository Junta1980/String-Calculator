import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { handleError} from './simplehandlerrror';


@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor(private http: HttpClient) {}

  gretButtons(): Observable<string[]> {
      const url = environment.urlApi + 'buttons';
      return this.http.get<buttons>(url).pipe(
        map(values => values.buttons),
        retry(1),
        catchError(handleError)
      );
    }
}

export interface buttons {
  buttons: [];
}
