import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DigestoService {
  constructor(private http: HttpClient) {}

  public getProcessoByCNJ(cnj: string): Observable<any> {
    const url = `${environment.API}/${cnj}${environment.tipoNumero}`;
    console.log(url);

    return this.http
      .get<any>(url, {
        headers: {
          Authorization:
            "Basic NWFmOGJhNGMtNDNlMy00MzYxLTllOWMtZjczNDU4YWI2YTViOg==",
          },
      })
      .pipe(map((res) => res));
  }
}
