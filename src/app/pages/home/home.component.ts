import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProcessoService } from 'src/app/data/processo/processo.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProcessoDetalhesComponent } from '../processo-detalhes/processo-detalhes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public indexTipo = 8;
  public indexNome = 2;
  public indexAdvogado = 9;
  // public indexNome = 2;
  // public indexNome = 2;


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
      .getProcessoByCNJ('0019600-40.2007.5.15.0124')
      .subscribe(() => {
        localStorage.getItem('processo');
      });

    console.log(this.processoService.processo);
  }

  public openDialog(): void {
    this.dialog.open(ProcessoDetalhesComponent, {
      width: '800px',
    });
  }
}
