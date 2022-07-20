import { ProcessoService } from 'src/app/data/processo/processo.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-processo-detalhes',
  templateUrl: './processo-detalhes.component.html',
  styleUrls: ['./processo-detalhes.component.scss'],
})
export class ProcessoDetalhesComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProcessoDetalhesComponent>,
    public processoService: ProcessoService
  ) {}

  ngOnInit(): void {
    console.log(this.processoService.processo)
  }
}
