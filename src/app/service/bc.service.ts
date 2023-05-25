import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Id } from '../components/model/identification.model';

@Injectable({
  providedIn: 'root'
})
export class Bc {

  constructor(private http: HttpClient) { }


  getTokenInfo(id: number){
    const params = new HttpParams().append("token", id).append("asset", "nfts")
    return this.http.get("http://localhost:8080/omnic/gettokeninfo",{params: params})
  }

  issueToken(id: Id){
    return this.http.post("http://localhost:8080/omnic/issuetoken",id)
  }
}
