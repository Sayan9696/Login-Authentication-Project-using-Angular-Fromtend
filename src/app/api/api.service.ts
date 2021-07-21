import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public authdetails: boolean = false

  baseUrl = 'http://localhost:8080/ImageApi';

  constructor(private http: HttpClient) { }

  login(user) {

    return this.http.post(this.baseUrl + '/LoginController', user);
  }

  register(user) {
    return this.http.post(this.baseUrl + '/UserController', user);
  }

  fetchImage(id) {
    return this.http.get(this.baseUrl + '/ImageController?userid=' + id);

  }
}