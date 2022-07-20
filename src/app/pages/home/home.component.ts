import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProcessoService } from 'src/app/data/processo/processo.service';
// import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public formCnj: FormGroup = new FormGroup({
    cnj: new FormControl(),
  });

  constructor(public processoService: ProcessoService, public dialog: Dialog) {}

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

//   openDialog(): void {
//     const dialogRef = this.dialog.open<string>(CdkDialogOverviewExampleDialog, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal},
//     });

//     dialogRef.closed.subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }
// }
}
