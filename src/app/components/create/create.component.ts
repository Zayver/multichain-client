import { Component } from '@angular/core';
import { Id } from '../model/identification.model';
import { Bc } from 'src/app/service/bc.service';
import { MessageService } from 'primeng/api';
import { timeInterval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  id: Id = new Id

  constructor(private bcS: Bc, private messageService: MessageService, private router: Router) {
  }


  submit() {
    this.bcS.issueToken(this.id).subscribe({
      next: (v: any) => {
        if (v.code !== undefined) {
          console.log(v)
          this.messageService.add({
            severity: 'error',
            summary: 'Error el token ya existe'
          })
        } else {
          this.messageService.add({
            severity: "success",
            summary: "Correcto",
            detail: "txid" + v
          })

          setTimeout(() => {
            this.router.navigate([""])
          }, 1000)
        }
      }
    })
  }
}
