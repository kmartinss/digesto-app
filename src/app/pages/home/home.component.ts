import { DigestoService } from './../../service/digesto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public formCnj: FormGroup = new FormGroup({
    cnj: new FormControl(),
  });

  constructor(private _digestoService: DigestoService) {}

  ngOnInit(): void {}

  public buscar(cnj: string) {
    this._digestoService.getProcessoByCNJ(cnj).subscribe(({ data }) => {
      console.log(data);
    });
  }
}
