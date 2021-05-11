import { Observable, throwError } from 'rxjs';

export function handleError(error): Observable<any> {
  const errorMessage = 'XHR call error check console';
  window.alert(errorMessage);
  return throwError(error);
}
