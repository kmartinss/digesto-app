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
}
