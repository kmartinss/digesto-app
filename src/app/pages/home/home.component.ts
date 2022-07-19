import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProcessoService } from 'src/app/data/processo/processo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public formCnj: FormGroup = new FormGroup({
    cnj: new FormControl(),
  });

  constructor(public processoService: ProcessoService) {}

  ngOnInit(): void {}

  public buscar() {
    this.processoService
      .getProcessoByCNJ(this.formCnj.controls['cnj'].value)
      .subscribe(() => {
        localStorage.getItem('processo');
      });

  }
}
