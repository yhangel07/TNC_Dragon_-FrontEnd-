import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  partner: any;

  apiUrl = environment.apiURL + '/partners';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl).pipe(
      map(resp => {
        let data = resp;

        return data;
      })
    )
  }

  setPartner(partner:any){
    this.partner = partner;
  }

  getPartner(){
    return this.partner;
  }

  getPartnerById(id){
    return this.partner.find( partner => partner.id === id);
  }
}
