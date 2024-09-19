import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDTO } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(model: RegisterUserDTO) {
    return this.http.post<any>("http://localhost:3000/api/register", model);
  }
}
