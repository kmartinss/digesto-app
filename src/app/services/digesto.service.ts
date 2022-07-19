import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DigestoService {
  constructor(private http: HttpClient) {}

  public getProcessoByCNJ(cnj: string): Observable<any> {
    const url = `/api/tribproc/${cnj}${environment.tipoNumero}`;
    const token = environment.apiToken;

    console.log(url);

    return this.http
      .get<any>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(map(({ res }) => console.log(res)));
  }
}
