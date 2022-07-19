import { DigestoService } from './../../service/digesto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _digestoService: DigestoService) {}

  ngOnInit(): void {}

  public buscar(cnj: string) {
    this._digestoService.getProcessoByCNJ(cnj).subscribe(({ data }) => {
      console.log(data);
    });
  }
}
