import { ProcessoMock } from './processo.mock';
import { ProcessoService } from './processo.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

describe('ProcessService', () => {
  let service: ProcessoService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProcessoService],
    });
    service = TestBed.inject(ProcessoService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be called a get method with the correct endpoint', () => {
    const cnj = '5001682-88.2020.8.13.0672';
    const spy = spyOn(http, 'get').and.callThrough();
    service.getProcessoByCNJ(cnj);
    expect(spy).toHaveBeenCalled();
  });

  it('should be returned to the error message if there is no corresponding process', (done) => {
    const cnj = '5001682-88.2020.8.13.0000';

    service.getProcessoByCNJ(cnj).subscribe((process) => {
      expect(process).toEqual({ status_op: 'Processo não encontrado' });
      done();
    });
    httpController
      .expectOne(`${service.apiUrl}/${cnj}?tipo_numero=8`)
      .flush({ status_op: 'Processo não encontrado' });
  });

  it('should return a process', (done) => {
    const cnj = '5001682-88.2020.8.13.0672';

    service.getProcessoByCNJ(cnj).subscribe((process) => {
      expect(process).toEqual(ProcessoMock);
      done();
    });

    httpController
      .expectOne(`${service.apiUrl}/${cnj}?tipo_numero=8`)
      .flush(ProcessoMock);
  });
});
