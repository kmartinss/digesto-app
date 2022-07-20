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

  // private formatResponse(response: any) {
  //   response.map((item) => ({
  //     numProcesso: item.numero,
  //     situacao: item.situacao,
  //     area: item.area,
  //     instancia: item.instancia,
  //     tribunal: item.tribunal,
  //     foro_cnj: item.foro_cnj,
  //     uf: item.uf,
  //     alteradoEm: item.alteradoEm,
  //     partes: item.partes.map((parte) => ({
  //       nome: parte[2],
  //       tipo: parte[8]
  //     }))
  //   }))
  // } //TODO -> Arquivo de tipagem de response
}


