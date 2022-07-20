import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcessoService {
  public processo: any;

  constructor(private http: HttpClient) {}

  public getProcessoByCNJ(cnj: string): Observable<any> {
    const url = `/api/tribproc/${cnj}${environment.tipoNumero}`;
    const token = environment.apiToken;

    return this.http
      .get<any>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(map((response) => this.processo = response));


  }
}
