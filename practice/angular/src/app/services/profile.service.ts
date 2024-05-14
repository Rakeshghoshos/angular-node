import { ApiManager } from '../utils/apiManager';
import { endpoints } from './../constants/apiendpoints';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private api:ApiManager) { }

  async request(data:any){
    let response = await this.api.request(
      {
        url : endpoints.LOGIN,
        method:'POST'
      },
      data,
      []
    )
    console.log(response);
  }
}
