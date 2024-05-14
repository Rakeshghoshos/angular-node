
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, throwError } from 'rxjs';
import { ResponseModel } from './response';

@Injectable({
  providedIn: 'root'
})

export class ApiManager {
  constructor(private http: HttpClient) { }
  private setHeaders = (headersInArray: any[]) => {
    let headers: any = {};
    headersInArray.forEach(element => {
      Object.keys(element).forEach((key) => {
        headers[key] = element[key];
      });
    });
    return { headers: new HttpHeaders(headers) };
  }

  request(config: { url: string, method: string }, data: any, headers: any[]) {
    switch (config.method) {
      case 'GET':
        return firstValueFrom(this.http.get<ResponseModel>(config.url, this.setHeaders(headers)));
      case 'POST':
        return firstValueFrom(this.http.post<ResponseModel>(config.url, data, this.setHeaders(headers)));
      case 'PUT':
        return firstValueFrom(this.http.put<ResponseModel>(config.url, data, this.setHeaders(headers)));
      case 'DELETE':
        return firstValueFrom(this.http.delete<ResponseModel>(config.url, this.setHeaders(headers)));
      default: {
        let response: ResponseModel = {
          data: 0,
          message: "Unknown request type!",
          status: 0
        }
        return response
      }
    }
  }
}
