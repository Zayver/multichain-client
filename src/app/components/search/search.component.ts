import { Component } from '@angular/core';
import { Id } from '../model/identification.model';
import { Bc } from 'src/app/service/bc.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  id: Id = new Id
  txid = ""
  search = ""

  constructor(private bc: Bc, private messageService: MessageService){}


  searchAction(){
    this.bc.getTokenInfo(+this.search).subscribe({
      next: (v: any)=>{
        if(v.details === undefined){
          this.id = new Id
          this.messageService.add({
            severity: 'error',
            summary: 'Error el token no existe en la blockchain'
          })
        }else{
          this.id = v.details
          this.txid = v.txid
        }
      }
    })
  }



}
