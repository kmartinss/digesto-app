import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProcessoService } from 'src/app/data/processo/processo.service';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoDetalhesComponent } from '../processo-detalhes/processo-detalhes.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public indexTipo = 8;
  public indexNome = 2;
  public indexAdvogado = 9;

  public indexMovData = 0;
  public indexMovTipo = 1;
  public indexMovDescricao = 2;

  public exibirMovimentacoes: boolean = false;

  public formCnj: FormGroup = new FormGroup({
    cnj: new FormControl(),
  });

  tabelaPartes: string[] = ['Tipo', 'Nome', 'Advogado', 'OAB'];
  tabelaMovimentacoes: string[] = ['Data', 'Tipo', 'Descricao'];

  constructor(
    public processoService: ProcessoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscar();
  }

  public buscar() {
    this.processoService
      .getProcessoByCNJ(this.formCnj.controls['cnj'].value)
      .subscribe(() => {
        localStorage.getItem('processo');
      });
  }

  public openDialog(): void {
    this.dialog.open(ProcessoDetalhesComponent, {
      width: '800px',
    });
  }

  public exibir() {
    this.exibirMovimentacoes = !this.exibirMovimentacoes;
  }
}
